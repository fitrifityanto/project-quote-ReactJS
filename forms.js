const FormContact = ({
    formTitles, page, formData, setFormData, errors, nameRef, emailRef, phoneRef, companyRef
}) => {
    
    React.useEffect(() => {
        nameRef.current.focus()
    },[])
    
    return (
        <div className="box-inside">
            <h2>{formTitles[page]} </h2>
            <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing.  </div>
            <div className="box-form">
                <div className="input-wrap">
                    <label
                        className={` ${errors.errorMsg === 'Name is required' ? 'warning-text' : ''} `}>Name</label>
                    <div className='input-wrapper'>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        ref={nameRef} 
                        onChange={(event) => setFormData({...formData, name: event.target.value}) }
                        placeholder="Name" 
                        className="input-field" 
                        style={errors.errorMsg === 'Name is required' ? {border: '2px solid var(--clr-warning)'} : {} }
                        />
                    <span className="icon"> <img src="img/name.svg" /></span>
                    </div>
                    {errors.errorMsg === 'Name is required' && <div className='warning-text' >{errors.errorMsg}</div> }
                </div>
                <div className="input-wrap">
                    <label 
                    className={` ${errors.errorMsg === 'Email is required' ? 'warning-text' : errors.errorEmail === 'Email is invalid' ? 'warning-text' : ''} `}
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
                        style={ errors.errorEmail === 'Email is invalid' ? {border: '2px solid #962DFF'} : errors.errorMsg === 'Email is required' ? {border: '2px solid #962DFF'} : {} } />
                    <span className="icon" style={{bottom: '40%'}}> <img src="img/email.svg" /></span>
                    </div>
                    {errors.errorMsg === 'Email is required' && <div className={`${errors.errorMsg === 'Email is required' ? 'warning-text' : ''}`} >{errors.errorMsg}</div> }
                    {errors.errorEmail === 'Email is invalid' && <div className={`${errors.errorEmail === 'Email is invalid' ? 'warning-text' : ''}`} >{errors.errorEmail}</div> }
                </div>
                <div className="input-wrap">
                    <label className={` ${errors.errorMsg === 'Phone number is required' ? 'warning-text' : errors.errorPhone === 'Phone number is invalid' ? 'warning-text' : ''} `}>Phone Number</label>
                    <div className='input-wrapper'>
                    <input 
                        type="text" 
                        name="phone"
                        value={formData.phone}
                        ref={phoneRef}
                        onChange={(event) => setFormData({...formData, phone: event.target.value}) }
                        placeholder="Phone Number" 
                        className="input-field"
                        style={errors.errorMsg === 'Phone number is required' ? {border: '2px solid var(--clr-warning)'} : {} }/>
                    <span className="icon"> <img src="img/phone-number.svg" /></span>
                    </div>
                    {errors.errorMsg === 'Phone number is required' && <div className={` ${errors.errorMsg === 'Phone number is required' ? 'warning-text' : ''} `}>{errors.errorMsg}</div> }
                    {errors.errorPhone === 'Phone number is invalid' && <div className={`${errors.errorPhone === 'Phone number is invalid' ? 'warning-text' : ''}`} >{errors.errorPhone}</div> }
                </div>
                <div className="input-wrap">
                    <label className={` ${errors.errorMsg === 'Company is required' ? 'warning-text' : ''} `}>Company</label>
                    <div className='input-wrapper' >
                    <input 
                        type="text"
                        name="company"
                        value={formData.company}
                        ref={companyRef} 
                        onChange={(event) => setFormData({...formData, company: event.target.value}) }
                        placeholder="Company" 
                        className="input-field"
                        style={errors.errorMsg === 'Company is required' ? {border: '2px solid var(--clr-warning)'} : {} }/>
                    <span className="icon"> <img src="img/company.svg" /></span>
                    </div>
                    {errors.errorMsg === 'Company is required' && <div className={` ${errors.errorMsg === 'Company is required' ? 'warning-text' : ''} `}>{errors.errorMsg}</div> }
                </div>
            </div>
        </div>
    )
}

function FormServices({formTitles, page, formData, setFormData}) {

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
                                checked={formData.service == service.name} 
                                onChange={(event) => {
                                    setFormData({...formData, service: event.target.value})
                                } }
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
                                checked={formData.budget === budget.name.replace(/[($.+ )]/g, '')}
                                onChange={(event) => {
                                    setFormData({...formData, budget: event.target.value.replace(/[($.+ )]/g, '')})
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

    const [errors, setErrors] = React.useState({
        errorMsg:'',
        errorEmail:'',
        errorPhone:''
    })

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
                setErrors({...errors, errorMsg: field.message })
                field.name === 'name' ? nameRef.current.focus() : field.name === 'email' ? emailRef.current.focus() :
                field.name === 'phone' ? phoneRef.current.focus() : companyRef.current.focus()
                return true
            }
            setErrors({
                errorMsg:'',
                errorEmail:'',
                errorPhone:''
            })
            return false
        })
        return isNotFilled
    }

    const handleNextStep = (event) => {
        event.preventDefault()
        const isInvalid = validateInput()
        if (!isInvalid) {
            if (!validateEmail(formData.email)) {
                setErrors({
                    errorMsg:'',
                    errorEmail:'Email is invalid',
                    errorPhone: '' })
                emailRef.current.focus()
            } else if (validateEmail(formData.email) && (!validatePhone(formData.phone))) {
                setErrors({
                    errorMsg:'',
                    errorEmail:'',
                    errorPhone: 'Phone number is invalid' })
                phoneRef.current.focus()
            } else{ 
                setErrors({
                    errorMsg:'',
                    errorEmail:'',
                    errorPhone:''
                })
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

    const FormDisplay = () => {
        if (page === 0) {
            return ( 
            <FormContact
                formTitles={formTitles}
                page={page}
                formData={formData} 
                setFormData={setFormData}
                errors={errors}
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