const FormContact = ({
    formData, errorsMsg,  nameRef, emailRef, phoneRef, companyRef, handleChange
}) => {
    
    return (
        <div className="box-inside">
            <TitleForm 
                title='Contact detail'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing.' />
            <div className="box-form">
                <div className="input-wrap">
                    <label>Name</label>
                    <div className='input-wrapper'>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        ref={nameRef} 
                        onChange={handleChange}
                        placeholder="Name" 
                        className="input-field" 
                        />
                    <span className="icon"> <img src="img/name.svg" /></span>
                    </div>
                    <div className='warning-text' >{errorsMsg.name}</div>
                </div>
                <div className="input-wrap">
                    <label >Email</label>
                    <div className='input-wrapper'>
                    <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        ref={emailRef}
                        onChange={handleChange}
                        placeholder="Email" 
                        className="input-field"
                        />
                    <span className="icon" style={{bottom: '40%'}}> <img src="img/email.svg" /></span>
                    </div>
                    <div className='warning-text' >{errorsMsg.email}</div> 
                </div>
                <div className="input-wrap">
                    <label >Phone Number</label>
                    <div className='input-wrapper'>
                    <input 
                        type="text" 
                        name="phone"
                        value={formData.phone}
                        ref={phoneRef}
                        onChange={handleChange}
                        placeholder="Phone Number" 
                        className="input-field"
                        />
                    <span className="icon"> <img src="img/phone-number.svg" /></span>
                    </div>
                  <div className='warning-text' >{errorsMsg.phone}</div> 
                </div>
                <div className="input-wrap">
                    <label >Company</label>
                    <div className='input-wrapper' >
                    <input 
                        type="text"
                        name="company"
                        value={formData.company}
                        ref={companyRef} 
                        onChange={handleChange}
                        placeholder="Company" 
                        className="input-field"
                        />
                    <span className="icon"> <img src="img/company.svg" /></span>
                    </div>
                    <div className='warning-text' >{errorsMsg.company}</div> 
                </div>
            </div>
        </div>
    )
}

function FormServices({formData, handleChange}) {

    const services = [
        {
            id: 0,
            name: "Development",
            img: "img/development.svg"
        },
        {
            id: 1,
            name: "Web Design",
            img: "img/web-design.svg"
        },
        {
            id: 2,
            name: "Marketing",
            img: "img/marketing.svg"
        },
        {
            id: 3,
            name: "Other",
            img: "img/other.svg"
        },
    ]

    return (
        <div>
            <TitleForm 
                title='Our services'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing.' />
            <div className="box-form">
                {
                    services.map(service => 
                        <label className="radio-services" key={service.id}>
                            <input 
                                type="radio" 
                                name="service"
                                value={service.name}
                                checked={formData.service == service.name} 
                                onChange={handleChange}
                                />
                            <div className="radio-btn">
                                <div className="services-icon"><img src={service.img} /></div>
                                <p>{service.name} </p>
                            </div>
                        </label>
                )}
            </div>
        </div>
    )}

function ProjectBudget({formData, handleChange, dataConvert}) {

    const budgets = [
        {
            id : 0,
            name : "$5.000 - $10.000"
        }, 
        {
            id : 1,
            name: "$10.000 - $20.000"
        }, 
        {
            id: 2,
            name: "$20.000 - $50.000"
        },
        {
            id: 3,
            name: "$50.000 +"
        } 
    ]

    return (
        <div>
            <TitleForm
                title="What's your Project budget?"
                description='Lorem, ipsum dolor sit amet consectetur adipisicing.' />
            <div className="box-form">
                {
                    budgets.map(budget =>        
                        <label className="radio-budget" key={budget.id}>
                            <input 
                                type="radio" 
                                name="budget"
                                value={budget.name}
                                checked={formData.budget === dataConvert(budget.name)}
                                onChange={handleChange}
                                />
                            <div className="radio-btn-b">
                                <div className="text-title">{budget.name} </div>
                            </div>
                        </label>
                    )
                }
            </div>             
        </div>
    )
}

function FormSubmission() {
    return (
        <div className="container-submit text-center">
            <img src="img/logo-submit.svg" />
            <div>
                <TitleForm 
                    title='Submit your quote request'
                    description='Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.' />
            </div>
        </div>
    )
}

const TitleForm = (props) => {
    const {title, description} = props
    return (
       <div>
            <h2>{title}</h2>
            <div className="description">{description} </div>
       </div> 
    )
}

function App() {
    const [page, setPage] = React.useState(0)

    const [formData, setFormData] = React.useState ({
        name:'',
        email:'',
        phone:'',
        company:'',
        service:'Development',
        budget: '50000'
    })

    const [errorsMsg, setErrorsMsg] = React.useState({})

    const nameRef = React.useRef()
    const emailRef = React.useRef()
    const phoneRef = React.useRef()
    const companyRef = React.useRef()

    React.useEffect(() => {
        if (page === 0) {
            nameRef.current.focus()
        }
    },[page])

    const validateInput = () => {
        let errorsMsg = {}
        let formValid = true
        const isValidEmail = /[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g
        const isValidPhone = /^08[1-9][0-9]{7,11}$/

        if (!formData.name) {
            formValid = false
            errorsMsg.name = 'Name is required'
        }

        if (!formData.email) {
            formValid = false
            errorsMsg.email = 'Email is required'
        } else if (!isValidEmail.test(formData.email)) {
            formValid = false
            errorsMsg.email = 'Email is invalid'
            emailRef.current.focus()
        }

        if (!formData.phone) {
            formValid = false
            errorsMsg.phone = 'Phone is required'
        } else if (!isValidPhone.test(formData.phone)) {
            formValid = false
            errorsMsg.phone = 'Phone is invalid'
            phoneRef.current.focus()
        } 

        if (!formData.company) {
            formValid = false
            errorsMsg.company = 'Company is required'
        }

        setErrorsMsg({...errorsMsg})
        // formData.name.trim() === '' ? nameRef.current.focus() : formData.email.trim() === '' ? emailRef.current.focus() : formData.phone.trim() === '' ? phoneRef.current.focus() :
        // companyRef.current.focus()
        return formValid
    }

    const dataConvert = (data) => {
        const result = data.replace(/[($.+ )]/g, '')
        return result
    }

    const handleNextStep = (event) => {
        event.preventDefault()   
        if (validateInput()) {
            setPage((currentPage) => currentPage + 1)  
        } 
    }

    const backStep = (e) => {
        e.preventDefault()
        setPage((currentPage) => currentPage - 1)
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'budget') {
            setFormData({...formData, [name] : dataConvert(value)})
        } else {
            setFormData({...formData, [name] : value})
        }
    }

    const handleSubmit = () => {
        const valueInput = formData
        const valueInputJSON = JSON.stringify(valueInput)
        alert(valueInputJSON)

        setFormData ({
            name:'',
            email:'',
            phone:'',
            company:'',
            service:'Development',
            budget: '50000'
        })
        setPage(0)
    }

    const FormDisplay = () => {
        if (page === 0) {
            return ( 
            <FormContact
                formData={formData} 
                errorsMsg={errorsMsg}
                nameRef={nameRef}
                emailRef={emailRef}
                phoneRef={phoneRef}
                companyRef={companyRef}
                handleChange={handleChange}
            /> )
        } else if (page === 1 ) {
            return <FormServices
                        formData={formData}
                        handleChange={handleChange}   
                    />
        } else if (page === 2) {
            return <ProjectBudget 
                        formData={formData}
                        handleChange={handleChange}
                        dataConvert={dataConvert}
                    />
        } else { return <FormSubmission
                        /> 
                }
    }

    return (
        <div className="form">
            <div className="box-container">
                <div className="progress-bar">
                <ul className="progressbar">
                    <li className={` ${page === 0 ? 'active now' : 'active'} `}></li>
                    <li className={` ${page === 1 ? 'active now' : page === 2 ? 'active' : page === 3 ? 'active' : ''} `}></li>
                    <li className={` ${page === 2 ? 'active now' : page === 3 ? 'active' : ''} `}></li>
                    <li className={` ${page === 3 ? 'active' : ''} `}></li>
                </ul>
                </div>
                <div className="form-container">
                    <div className="body">
                        {FormDisplay()} 
                        <div className="container-submit">
                            { page === 3 && <button className="btn-submit" onClick={handleSubmit} >Submit</button>} 
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">            
                <div className="btn-wrap">
                    <div>{ page !== 0 && <button className="btn btn-prev" onClick={backStep}>Previous step</button>}  </div>
                    <div></div>
                    <div>{ page < 3 && <button className="btn" onClick={handleNextStep} >Next Step</button>}</div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))