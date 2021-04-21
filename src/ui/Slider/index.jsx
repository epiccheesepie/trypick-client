import React from 'react';
import './Slider.css';

const Slider = ({title, left, right, step, desc, onRanged, sliderRange}) => {

    const backerRef = React.useRef(); //слайдер (полоска)

    const [leftThumb, setLeftThumb] = React.useState({ //левый тамб
        left: 0,
        level: 0 //уровень тамба, [зависит от кол-ва частей, на которые можно поделить слайдер]
    });
    const [rightThumb, setRightThumb] = React.useState({ //правый
        left: 100,
        level: (right-left) / step
    });
    const handleSliderChange = (setter, index) => (nowLeft, level) => {
        setter(_ => {
            return {
                left: nowLeft,
                level
            };
        });

        const range = sliderRange;
        range[index] = left+(level*step);
        onRanged(title, range);
    };

    const stepArray = React.useMemo(() => { //формирование массива из процентных шагов
        
        //step - шаг в пределах диапазона;
        const range = right - left; //диапазон слайдера
        const diff = range / step; //на сколько частей поделить диапазон слайдера [кол-во уровней]
        const length = 100; //длина полоски в процентах
        const stepPercent = Math.floor(length/diff); //шаг в процентах
        const lastStep = length - ((diff-1) * stepPercent); //последний шаг в процентах
        const stepArray = new Array(diff-1); //массив из всех шагов на уровнях слайдера
        stepArray.fill(stepPercent); //заполнить весь массив кроме последнего шага step'ом

        return stepArray.concat(lastStep);
    });

    const leftStopper = (newLeft) => {
        newLeft = (newLeft < 0) ? 0 : newLeft;

        const right = rightThumb.left;
        if (newLeft > right) {
            newLeft = right;
        }
        return newLeft;
    };
    const rightStopper = (newLeft) => {
        newLeft = (newLeft > 100) ? 100 : newLeft;

        const left = leftThumb.left;
        if (newLeft < left) {
            newLeft = left;
        }
        return newLeft;
    };

    const [thumbActive, setThumbActive] = React.useState(false);
    const handlerActive = (active) => {
        setThumbActive(prev => {
            return (active) ? prev : !prev;
        });
    };

    return (
        <div className="slider">
                <div className="slider__title">
                    {title}
                </div>
                <div ref={backerRef} className="slider__wrap">
                    <Thumb
                        backerRef={backerRef}      
                        thumbState={leftThumb}
                        stepArray={stepArray}
                        stopper={leftStopper}
                        onChange={handleSliderChange(setLeftThumb, 0)}
                        active={thumbActive}
                        onActive={handlerActive}
                    />
                    <Thumb
                        backerRef={backerRef}
                        thumbState={rightThumb}
                        stepArray={stepArray}
                        stopper={rightStopper}
                        onChange={handleSliderChange(setRightThumb, 1)}
                        active={!thumbActive}
                        onActive={handlerActive}
                    />
                </div>
                <div className="edge">
                    <span className="edge__left">
                        от {`${sliderRange[0]} ${desc}`} 
                    </span>
                    <span className="edge__right">
                        до {`${sliderRange[1]} ${desc}`} 
                    </span>
                </div>
        </div>
    );
};

const Thumb = ({backerRef, thumbState, stepArray, stopper, onChange, active, onActive}) => {


    const handleDrag = (e) => {
        // e.preventDefault();
        onActive(active);
        const clientX = e.clientX || e.changedTouches[0].clientX; //мышка или палец

        const backer = backerRef.current; //задняя полоска слайдера
        const thumb = e.currentTarget; //изменяемый тамб
        const lengthPx = (backer.offsetWidth); //длина полоски в пикселах

        const shiftX = clientX - thumb.getBoundingClientRect().left; //смещение относительно мышки
        let level = thumbState.level; //текущий уровень слайдера
        let nowLeft = thumbState.left; //текущая позиция тамба

        const onMouseMove = (e) => {
            const clientX = e.clientX || e.changedTouches[0].clientX; //мышка или палец

            let newLeft = clientX - shiftX - backer.getBoundingClientRect().left; //сдвиг мышкой
            newLeft = (newLeft * 100 / lengthPx); //сдвиг мышкой в процентах
            newLeft = stopper(newLeft); //левая и правая граница тумблера

            if (newLeft - nowLeft > stepArray[level]/2) { //если сдвиг вправо на половину шага ->
                nowLeft += stepArray[level++]; //прибавить шаг текущего уровня -> увеличить уровень на 1
            }
            if (nowLeft - newLeft > stepArray[level-1]/2) { //если сдвиг влево на половину шага ->
                nowLeft -= stepArray[--level]; //отнять шаг предыдущего уровня -> уменьшить уровень на 1
            }

            onChange(nowLeft, level);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            document.removeEventListener('touchmove', onMouseMove);
            document.removeEventListener('touchend', onMouseUp);
        };

        if (e.changedTouches) { /* сенсор */
            document.addEventListener('touchmove', onMouseMove);
            document.addEventListener('touchend', onMouseUp);
        } else { /* мышка */
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
    };

    return (
        <div
            className={`thumb ${active ? 'active' : ''}`}
            style={{left: thumbState.left + '%'}}
            onMouseDown={(e) => handleDrag(e)}
            onTouchStart={(e) => handleDrag(e)}
        >
        </div>
    );
};

export default Slider;