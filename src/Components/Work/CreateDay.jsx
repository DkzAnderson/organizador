import React, { useState } from 'react'
import moment from 'moment'


export const CreateDay = ({config,up}) => {



    const [delay,setDelay] = useState(false);
    const [fail,setFail] = useState(false);
    const [rDelay,setRdelay] = useState('n/a');
    const [rFail,setRfail] = useState('n/a');
    const [overTime,setOverTime] = useState(false);

    class Day {
        constructor({
            hours, delay, fail,
            reasonForDelay, reasonForFail,
            start, end
        }) {
            this.name = new Date().getDate();
            this.date = moment().format('L')
            this.start = start
            this.end = end,
                this.extras = {
                    hours: hours,
                    delay: delay,
                    reasonForDelay: reasonForDelay,
                    fail: fail,
                    reasonForFail: reasonForFail
                }
        }

        setTime(value) {
            if (value == 'start') {
                this.start = moment().format('LT');
            } else {
                this.end = moment().format('LT');
            }
        }

        setDay() {
            this.date = moment().format('L')
        }


    }

    class Month {
        constructor() {
            this.name = new Date().toLocaleString('es-ES', { month: 'long' });
            this.days = []
        }

        s() {
            return this.month;
        }
    }

    function createMonth() {
        const month = new Month();
        let flag = false;
        year.forEach(element => {
            if (element.name == month.name) {
                flag = true;
            }
        });
        if (flag == false) year.push(month);
    }

    function createDay(hours = 0, delay = false, reaseonForFail = 'n/a', reasonForDelay = 'n/a',
        fail = false
    ) {

        const actualMonth = new Date().toLocaleString('es-ES', { month: 'long' });
        const newDay = new Day({ hours, delay, fail, reaseonForFail, reasonForDelay });

        year.forEach(element => {
            if (element.name == actualMonth) {
                if (element.days.length > 0) {
                    element.days.forEach(element => {
                        console.log(1)
                        if (element.date === newDay.date) {
                            console.log('holo')
                        } else {
                            element.days.push(newDay);
                            console.log('agregado')
                        }
                    });
                } else {
                    element.days.push(newDay);
                    console.log('dia creado')
                }

            }
        });
        console.log(year)
    }

    let year = [
        {
            name: 'agosto',
            days: []
        },
        {}
    ]

    function GetData(e){
        e.preventDefault();
        const exitHour = e.target.salida.value;
        const startHour = e.target.entrada.value;
        const late = delay;
        const failure = fail;
        const reasonForLate = rDelay;
        const reasonForFailure = rFail;
        const amountOfOverTime = e.target.overtime.value;

        const dia = new Day({
            start: startHour,
            end: exitHour,
            hours: amountOfOverTime === ""?  0 : Number(amountOfOverTime),
            delay: late,
            reasonForDelay: reasonForLate,
            fail: failure,
            reasonForFail: reasonForFailure
        })

        up(dia)
        
    }


    const styles = {
        main: 'p-10 flex flex-col items-center',
        
        form: {
            main: 'flex flex-col gap-5 w-full',
            label: 'w-full grid grid-cols-2',
            div: 'w-full grid grid-cols-2',
            subTitles: 'text-lg font-bold',
            inputTime: 'border border-black rounded-lg px-3 place-self-end',
            button: 'border border-black rounded-lg bg-green-600 text-2xl font-bold text-white px-2 py-1'
        },

        fail:{
            main:'place-self-end border cursor-pointer rounded-full grid grid-cols-2 w-32 overflow-hidden border-black',
            left:`w-full duration-300 text-center border-r border-black ${fail ? 'bg-red-500' : 'bg-gray-200'}`,
            right:`w-full duration-300 text-center border-l border-black ${fail ? 'bg-gray-230' : 'bg-green-500'}`,
            reasonMain: `${fail ? 'flex' : 'hidden'} flex-col `,
            reasonTitle:'text-xl text-orange-700',
            reasonInput: 'border w-auto rounded-lg border-black px-2 py-1'
        },

        delay:{
            main:'place-self-end border cursor-pointer rounded-full grid grid-cols-2 w-32 overflow-hidden border-black',
            left:`w-full duration-300 text-center border-r border-black ${delay ? 'bg-red-500' : 'bg-gray-200'}`,
            right:`w-full duration-300 text-center border-l border-black ${delay ? 'bg-gray-230' : 'bg-green-500'}`,
            reasonMain: `${delay ? 'flex' : 'hidden'} flex-col`,
            reasonTitle:'text-xl text-orange-700',
            reasonInput: 'border w-auto rounded-lg border-black px-2 py-1'
        },

        overTime:{
            main:'place-self-end border cursor-pointer rounded-full grid grid-cols-2 w-32 overflow-hidden border-black',
            left:`w-full duration-300 text-center border-r border-black ${overTime ? 'bg-red-500' : 'bg-gray-200'}`,
            right:`w-full duration-300 text-center border-l border-black ${overTime ? 'bg-gray-230' : 'bg-green-500'}`,
            amountBox: `${overTime ? 'flex' : 'hidden'} gap-4 items-center`,
            amountTitle: 'text-xl text-orange-700',
            amountInput:'border w-12 rounded-lg border border-black px-2 py-1'
        }
    }

    return (
        <div className={styles.main}>
            
            <form onSubmit={(e)=>GetData(e)}
                className={styles.form.main}
            >
                <label className={styles.form.label}>
                    <h4 className={styles.form.subTitles}>
                        Hora de Ingreso
                    </h4>
                    <input className={styles.form.inputTime} type="time" name='entrada'/>
                </label>
                
                <label className={styles.form.label}>
                    <h4 className={styles.form.subTitles}>
                        Hora de Salida
                    </h4>
                    <input className={styles.form.inputTime} type="time" name='salida'/>
                </label>

                <div className={styles.form.div}>
                    <h4 className={styles.form.subTitles}>
                        Falta
                    </h4>

                    <span className={styles.fail.main}>
                        <h4 onClick={()=>setFail(true)} className={styles.fail.left}>Si</h4>
                        <h4 onClick={()=>setFail(false)} className={styles.fail.right}>No</h4>
                    </span>
                </div>

                <label className={styles.fail.reasonMain}>
                    <h4 className={styles.fail.reasonTitle}>
                        Motivo de la falta
                    </h4>

                    <input onChange={(e)=>setRfail(e.target.value)} type="text" className={styles.fail.reasonInput}/>
                </label>

                <div className={styles.form.div}>
                    <h4 className={styles.form.subTitles}>
                        Tardanza
                    </h4>

                    <span className={styles.delay.main}>
                        <h4 onClick={()=>setDelay(true)} className={styles.delay.left}>Si</h4>
                        <h4 onClick={()=>setDelay(false)} className={styles.delay.right}>No</h4>
                    </span>
                </div>

                <label className={styles.delay.reasonMain}>
                    <h4 className={styles.delay.reasonTitle}>
                        Motivo de la tardanza
                    </h4>

                    <input onChange={(e)=>setRdelay(e.target.value)} type="text" className={styles.delay.reasonInput}/>
                </label>

                <div className={styles.form.div}>
                    <h4 className={styles.form.subTitles}>
                        Horas extras
                    </h4>
                    <span className={styles.overTime.main}>
                        <h4 onClick={()=>setOverTime(true)} className={styles.overTime.left}>Si</h4>
                        <h4 onClick={()=>setOverTime(false)} className={styles.overTime.right}>No</h4>
                    </span>
                </div>

                <label className={styles.overTime.amountBox}>
                    <h4 className={styles.overTime.amountTitle}>
                    Cantidad
                    </h4>
                    <input name='overtime' type="number" className={styles.overTime.amountInput}/>
                </label>

                <button className={styles.form.button}>
                    Guardar datos
                </button>
            </form>
        </div>
    )
}
