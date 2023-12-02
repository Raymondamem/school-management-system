import React, { useState, useEffect } from 'react';
import { json } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import data from '/public/data/data';
import boxs from '/public/data/boxs';
import "../assets/scss/style.css";
import Boxs from '../components/Boxs';
import jsonData from '/public/data/jsonData';

export default function Dashboard(props) {
    const [boxsGot, alterBoxs] = useState(boxs)
    const [arr, addItem] = useState(['will ', 'hope ', 'ann ', 'gloryia ', 'prince ']);
    const [persons, addPersons] = useState(data);
    const [jsonGot, addSTToJson] = useState({
        fname: "Raymond",
        Age: 25,
        classat: "ND Graduate",
        love: "male",
        tougths: true,
        url: "https://www.cometochurch.com",
        isFave: false
    });
    const [isDark, setIsDark] = useState(true);
    const handleAdd = () => {
        const updateArr = [...arr, "john"];
        addItem(prev => prev = updateArr)
    }
    const handleAdd2 = () => {
        return addSTToJson(prev => {
            return { ...prev, url: "https://pptlinks.com" }
        })
    }
    const isFaveFunc = () => {
        return addSTToJson(prev => {
            return { ...prev, isFave: !prev.isFave }
        })
    }
    function changeBoxBg(id) {
        alterBoxs(prev => {
            return (prev.map(prevBox => {
                return (prevBox.id === id ? { ...prevBox, on: !prevBox.on } : prevBox)
            }))
        })
    }
    const toggleBg = (id) => {
        addPersons(prev => {
            return prev.map(prevItem => {
                return prevItem.id === id ? { ...prevItem, fee: { ...prevItem.fee, payed: !prevItem.fee.payed } } : prevItem
            })
        })
    }
    const imparativeBox = boxsGot.map((box) => {
        return (
            <Boxs
                key={box.id}
                id={box.id}
                on={box.on}
                toggle={() => changeBoxBg(box.id)}
            />
        )
    })
    const CoreComponent = persons.map((person) => {
        return (
            <div className={person.fee.payed ? "text-[black] relative bg-[green]" : "text-[black] relative bg-[lime]"} key={person.id}>
                <p>Name: {person.name}</p>
                <p>Title: {person.title}</p>
                <p>Course: {person.course}</p>
                <p>Sex: {person.sex}</p>
                <p>Matrix Number: {person.matric_number}</p>
                <p>SchoolFees Amount: {person.fee.amount}, {person.fee.payed ? "Paid" : "Not-paid"}</p>
                <hr />
                <button onClick={() => toggleBg(person.id)} className='absolute bottom-[15px] right-0 bg-[white] p-2 hover:bg-[red]'>Toggle</button>
            </div>
        )
    })
    function LocalStorageFunc() {
        const [userComment, setUserComment] = useState("");

        function commentFunc() {
            return setUserComment();
        }

        return (
            <>
                <article className='text-black'>
                    <header>
                        <h1>Welcome to local storage test!</h1>
                        <form>
                            <input type="text" onChange={commentFunc} name='comment' value={userComment} placeholder='Comment 👍' className='text-[black]' />
                        </form>
                    </header>
                </article>
            </>
        )
    }
    function FormElement() {
        const [formInputs, setFormInputs] = useState({
            firstName: "",
            lasttName: "",
            email: "",
            password: "",
            confirmpassword: "",
            comments: "",
            isFrendly: false,
            newsletter: false,
            employment: "",
            favColor: ""
        });
        const [fetchState, setFetchState] = useState("welcome to hobbits")
        const [windoewWidth, setwindoewWidth] = useState(window.innerWidth)
        const [toggler, settoggler] = useState(true)

        // console.log(formInputs);
        function handleFormInputs(event) {
            const { name, value, type, checked } = event.target;
            // console.log(`type: ${type}, name: ${name}, value: ${value}, checked: ${checked}`);
            setFormInputs(prev => {
                // I tut I was smarter than the tutorial until 👌😒
                // if (event.target.name === "firstName") {
                //     return { ...prev, firstName: event.target.value }
                // } else {
                //     return { ...prev, lastName: event.target.value }
                // }
                return {
                    ...prev,
                    [name]: type === "checkbox" ? checked : value
                }
            })
        }

        // function resetForm() {
        //     formInputs.map(formItem => {
        //         setFormInputs("")
        //     })
        // }

        function handleFormSubmition(event) {
            event.preventDefault();
            if (formInputs.password === formInputs.confirmpassword) {
                console.log("Password currect!", formInputs);
                return;
            }
            console.log("Password incurrect!");
            return;
        }
        // making use of useffect for listening for dom changes and render or executing a command based on dom or some states valuse change👌
        // big rubish trying to do ... below
        // useEffect(() => {
        //     async function asyncFunc() {
        //         const fetcher = await fetch(jsonData);
        //         const jsoner = json(fetcher);
        //         console.log("fetch effect! ", jsoner);
        //         setFetchState(jsoner);
        //     }
        //     asyncFunc();

        //     return () => {
        //         asyncFunc();
        //     }
        // }, [counter])
        // effect not fully working somehow, 😂now working perfectlly
        useEffect(() => {
            const watchWidth = () => {
                // console.log("Settingup Effect!", windoewWidth);
                setwindoewWidth(window.innerWidth);
            }
            window.addEventListener("resize", watchWidth);
            return () => {
                // console.log("Cleaningup Effect!", windoewWidth);
                window.removeEventListener("resize", watchWidth);
            }
        }, [windoewWidth]);
        // console.log("Outside effect ran", windoewWidth);
        // end of not fully working effect somehow, 😂now working perfectlly

        return (
            <>
                <div className='bg-[black]'>
                    <button className='p-3 bg-slate-200 text-[black] mb-1' onClick={() => settoggler(prev => !prev)}>Toggle state</button>
                    {toggler && <p className='p-3 bg-slate-200 text-[black]'>{windoewWidth} - {fetchState}</p>}
                </div>
                <form onSubmit={handleFormSubmition} className='min-h-[50vh] bg-[brown] py-[2rem] flex flex-col gap-[1rem] text-[black]'>
                    <input type="text" onChange={handleFormInputs} name='firstName' value={formInputs.firstName} placeholder='Firest name' className='text-[black]' />
                    <input type="text" onChange={handleFormInputs} name='lasttName' value={formInputs.lasttName} placeholder='Last name' className='text-[black]' />
                    <input type="email" onChange={handleFormInputs} name='email' value={formInputs.email} placeholder='Email' className='text-[black]' />
                    <input type="password" onChange={handleFormInputs} name='password' value={formInputs.password} placeholder='password' className='text-[black]' />
                    <input type="password" onChange={handleFormInputs} name='confirmpassword' value={formInputs.confirmpassword} placeholder='confirmpassword' className='text-[black]' />
                    <textarea onChange={handleFormInputs} value={formInputs.comments} placeholder='Drop your comments here' name="comments" cols="30" rows="10" />
                    <div className='text-white'>
                        <input type="checkbox" className='mr-3' name="isFrendly" id="isFrendly" onChange={handleFormInputs} checked={formInputs.isFrendly} />
                        <label htmlFor="isFrendly">Are you freindly?</label>
                    </div>
                    <fieldset className='text-white'>
                        <legend>Employment status</legend>
                        <input
                            type="radio"
                            id="Unemployed"
                            className='mr-3'
                            onChange={handleFormInputs}
                            name="employment"
                            value="Unemployed"
                            checked={formInputs.employment === "Unemployed"}
                        />
                        <label htmlFor="Unemployed">Unemployed</label>
                        <br />
                        <input
                            type="radio"
                            id="Employed"
                            className='mr-3'
                            onChange={handleFormInputs}
                            name="employment"
                            value="Employed"
                            checked={formInputs.employment === "Employed"}
                        />
                        <label htmlFor="Employed">Employed</label>
                        <br />
                        <input
                            type="radio"
                            id="Student"
                            className='mr-3'
                            onChange={handleFormInputs}
                            name="employment"
                            value="Student"
                            checked={formInputs.employment === "Student"}
                        />
                        <label htmlFor="Student">Student</label>
                        <br />
                    </fieldset>
                    <select id='favColor' name="favColor" value={formInputs.favColor} onChange={handleFormInputs}>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="gold">Gold</option>
                        <option value="purple">Purple</option>
                    </select>
                    <div>
                        {/* <button className='bg-[white] text-[brown] p-3 mx-5' type="reset" onClick={resetForm}>Reset</button> */}
                        <button className='bg-[white] text-[brown] p-3 mx-5' type="submit">Send</button>
                    </div>
                    <div className='text-white'>
                        <input type="checkbox" className='mr-3' name="newsletter" id="newsletter" onChange={handleFormInputs} checked={formInputs.newsletter} />
                        <label htmlFor="newsletter">Would you like to join the news letter?</label>
                    </div>
                </form>
            </>
        )
    }
    function toggleDackMode() {
        setIsDark(prev => !prev);
    }
    return (
        <>
            <LocalStorageFunc />
            <FormElement />
            <button className='p-3 bg-[black] text-white' onClick={toggleDackMode}>dark mode</button>
            <div className={isDark ? "!bg-[black] dark flex flex-row justify-between pb-10" : "flex flex-row justify-between pb-10"}>
                <div className='w-[50%]'>
                    <h1>{props.currentPage}</h1>
                    <input type="text" name="name" id="name" />
                    <button onClick={handleAdd} className='btn text-sm duration-200 text-white bg-gray-300 hover:bg-slate-800 py-4 px-3'>Add items</button>
                    {/* <Display /> */}
                    <div className='card text-[black] mt-2'>
                        {arr.map((item, index) => {
                            return (
                                <p key={index} className='bg-[gold] mb-1'>{item} {index}</p>
                            )
                        })}
                    </div>
                    <button onClick={handleAdd2} className='btn text-sm duration-200 text-white bg-gray-300 hover:bg-slate-800 py-4 px-3'>Click json</button>
                    <div className="output text-[white] bg-slate-800 mt-1">
                        <p>{jsonGot.fname}</p>
                        <p>{jsonGot.Age}</p>
                        <p>{jsonGot.love}</p>
                        <p>{jsonGot.classat}</p>
                        <p>{jsonGot.tougths}</p>
                        <p>{jsonGot.url}</p>
                        <p onClick={isFaveFunc} className={jsonGot.isFave ? "bg-[pink] text-[black]" : ""}>{jsonGot.isFave} Love it</p>
                    </div>
                    <div className='flex flex-wrap gap-1 justify-evenly items-center bg-[white] text-[black]'>
                        {imparativeBox}
                    </div>
                </div>
                <div className='w-[50%]'>
                    {true && CoreComponent}
                </div>
            </div>
        </>
    );
}