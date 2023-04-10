const FormContact = ({
    formTitles, page, formData, setFormData, errorMsg, errorEmail, errorPhone, nameRef, emailRef, phoneRef, companyRef
}) => {
    
    return (
        <div className="box-inside">
            <h2>{formTitles[page]} </h2>
            <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing.  </div>
            <div className="box-form">
                <div className="input-wrap">
                    <label
                        className={` ${errorMsg === 'Name is required' ? 'warning-text' : ''} `}>Name</label>
                    <div className='input-wrapper'>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        ref={nameRef} 
                        onChange={(event) => setFormData({...formData, name: event.target.value}) }
                        placeholder="Name" 
                        className="input-field" 
                        style={errorMsg === 'Name is required' ? {border: '2px solid var(--clr-warning)'} : {} }
                        />
                    <span className="icon"> <img src="img/name.svg" /></span>
                    </div>
                    {errorMsg === 'Name is required' && <div className='warning-text' >{errorMsg}</div> }
                </div>
                <div className="input-wrap">
                    <label 
                    className={` ${errorMsg === 'Email is required' ? 'warning-text' : errorEmail === 'Email is invalid' ? 'warning-text' : ''} `}
                    >Email</label>
                    <div className='input-wrapper'>
                    <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        ref={emailRef}
                        onChange={ (event) => setFormData({...formData, email: event.target.value}) }
                        placeholder="Email" 
                        className="input-field"
                        style={ errorEmail === 'Email is invalid' ? {border: '2px solid #962DFF'} : errorMsg === 'Email is required' ? {border: '2px solid #962DFF'} : {} } />
                    <span className="icon" style={{bottom: '40%'}}> <img src="img/email.svg" /></span>
                    </div>
                    {errorMsg === 'Email is required' && <div className={`${errorMsg === 'Email is required' ? 'warning-text' : ''}`} >{errorMsg}</div> }
                    {errorEmail === 'Email is invalid' && <div className={`${errorEmail === 'Email is invalid' ? 'warning-text' : ''}`} >{errorEmail}</div> }
                </div>
                <div className="input-wrap">
                    <label className={` ${errorMsg === 'Phone number is required' ? 'warning-text' : errorPhone === 'Phone number is invalid' ? 'warning-text' : ''} `}>Phone Number</label>
                    <div className='input-wrapper'>
                    <input 
                        type="text" 
                        name="phone"
                        value={formData.phone}
                        ref={phoneRef}
                        onChange={(event) => setFormData({...formData, phone: event.target.value}) }
                        placeholder="Phone Number" 
                        className="input-field"
                        style={errorMsg === 'Phone number is required' ? {border: '2px solid var(--clr-warning)'} : {} }/>
                    <span className="icon"> <img src="img/phone-number.svg" /></span>
                    </div>
                    {errorMsg === 'Phone number is required' && <div className={` ${errorMsg === 'Phone number is required' ? 'warning-text' : ''} `}>{errorMsg}</div> }
                    {errorPhone === 'Phone number is invalid' && <div className={`${errorPhone === 'Phone number is invalid' ? 'warning-text' : ''}`} >{errorPhone}</div> }
                </div>
                <div className="input-wrap">
                    <label className={` ${errorMsg === 'Company is required' ? 'warning-text' : ''} `}>Company</label>
                    <div className='input-wrapper' >
                    <input 
                        type="text"
                        name="company"
                        value={formData.company}
                        ref={companyRef} 
                        onChange={(event) => setFormData({...formData, company: event.target.value}) }
                        placeholder="Company" 
                        className="input-field"
                        style={errorMsg === 'Company is required' ? {border: '2px solid var(--clr-warning)'} : {} }/>
                    <span className="icon"> <img src="img/company.svg" /></span>
                    </div>
                    {errorMsg === 'Company is required' && <div className={` ${errorMsg === 'Company is required' ? 'warning-text' : ''} `}>{errorMsg}</div> }
                </div>
            </div>
        </div>
    )
}

function FormServices({formTitles, page, formData, setFormData}) {
    const [selectedService, setSelectedService] = React.useState('Development')

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
            <h2>{formTitles[page]} </h2>
            <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing.  </div>
            <div className="box-form">
                {
                    services.map(service => 
                        <label className="radio-services" key={service.id}>
                            <input 
                                type="radio" 
                                name="service"
                                value={service.name}
                                checked={selectedService === service.name} 
                                onChange={(event) => {
                                    setSelectedService(event.target.value)
                                    setFormData({...formData, service: event.target.value})} }
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

function ProjectBudget({formTitles, page, formData, setFormData}) {
    const [selectedBudget, setSelectedBudget] = React.useState('$50.000 +')

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
            <h2>{formTitles[page]} </h2>
            <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing.  </div> 
            <div className="box-form">
                {
                    budgets.map(budget => 
                        <label className="radio-budget" key={budget.id}>
                            <input 
                                type="radio" 
                                name="budget"
                                value={budget.name}
                                checked={selectedBudget === budget.name} 
                                onChange={(event) => {
                                    setSelectedBudget(event.target.value)
                                    const newBudget = event.target.value.replace(/[($.+)]/g, '')
                                    setFormData({...formData, budget: newBudget})
                                }}
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

function FormSubmission({formTitles, page}) {
    return (
        <div className="container-submit text-center">
            <img src="img/logo-submit.svg" />
            <div>
                <h2>{formTitles[page]}</h2>
                <div className="description">Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</div>
            </div>
        </div>
    )
}

function App() {
    const [page, setPage] = React.useState(0)

    const formTitles = ["Contact detail", "Our services", "What's your Project budget?", "Submit your quote request"]

    const [formData, setFormData] = React.useState ({
        name:'',
        email:'',
        phone:'',
        company:'',
        service:'Development',
        budget: '50000'
    })

    const [errorMsg, setErrorMsg] = React.useState('')
    const [errorEmail, setErrorEmail] = React.useState('')
    const [errorPhone, setErrorPhone] = React.useState('')

    const nameRef = React.useRef()
    const emailRef = React.useRef()
    const phoneRef = React.useRef()
    const companyRef = React.useRef()

    const validateEmail = (email) => {
        const isValidEmail = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email)
        return isValidEmail
    }

    const validatePhone = (phone) => {
        const isValidPhone = /^08[1-9][0-9]{7,11}$/.test(phone)
        return isValidPhone
        }

    const validateInput = () => {
        const fields = [
            {
                name: 'name',
                value: formData.name,
                message: 'Name is required'
            },
            {
                name: 'email',
                value: formData.email,
                message: 'Email is required'
            },
            {
                name: 'phone',
                value: formData.phone,
                message: 'Phone number is required'
            },
            {
                name: 'company',
                value: formData.company,
                message: 'Company is required'
            }
        ]

        const isNotFilled = fields.some(field => {
            if (field.value.trim() === '') {
                setErrorMsg(field.message)
                field.name === 'name' ? nameRef.current.focus() : field.name === 'email' ? emailRef.current.focus() :
                field.name === 'phone' ? phoneRef.current.focus() : companyRef.current.focus()
                return true
            }
            setErrorMsg('')
            return false
        })
        return isNotFilled
    }

    const handleNextStep = (event) => {
        event.preventDefault()
        const isInvalid = validateInput()
        if (!isInvalid) {
            if (!validateEmail(formData.email)) {
                setErrorEmail('Email is invalid')
                emailRef.current.focus()
            } else if (validateEmail(formData.email) && (!validatePhone(formData.phone))) {
                setErrorEmail('')
                setErrorPhone('Phone number is invalid')
                phoneRef.current.focus()
            } else{ 
                setErrorEmail('')
                setErrorPhone('')
                setPage((currentPage) => currentPage + 1)  
            }
        }
    }

    const backStep = (e) => {
        e.preventDefault()
        setPage((currentPage) => currentPage - 1)
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

    React.useEffect(() => {
        nameRef.current.focus()
    },[])

    const FormDisplay = () => {
        if (page === 0) {
            return ( 
            <FormContact
                formTitles={formTitles}
                page={page}
                formData={formData} 
                setFormData={setFormData}
                errorMsg={errorMsg}
                errorEmail={errorEmail}
                setErrorEmail={setErrorEmail}
                errorPhone={errorPhone}
                nameRef={nameRef}
                emailRef={emailRef}
                phoneRef={phoneRef}
                companyRef={companyRef}
            /> )
        } else if (page === 1 ) {
            return <FormServices
                        formTitles={formTitles}
                        page={page} 
                        formData={formData}
                        setFormData={setFormData}
            />
        } else if (page === 2) {
            return <ProjectBudget 
                        formTitles={formTitles}
                        page={page}
                        formData={formData}
                        setFormData={setFormData}
            />
        } else { return <FormSubmission
                            formTitles={formTitles}
                            page={page} 
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
                            { page === formTitles.length -1 && <button className="btn-submit" onClick={handleSubmit} >Submit</button>} 
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">            
                <div className="btn-wrap">
                    <div>{ page !== 0 && <button className="btn btn-prev" onClick={backStep}>Previous step</button>}  </div>
                    <div></div>
                    <div>{ page < formTitles.length - 1 && <button className="btn" onClick={handleNextStep} >Next Step</button>}</div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))