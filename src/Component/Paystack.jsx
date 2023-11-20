import {React,useState} from 'react'
import PaystackPop from '@paystack/inline-js'

const Paystack = () => {
    const [email,setEmail] = useState("")
    const [amount,setamount] = useState("")
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const paywithpaystack = (e) =>{
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key:'pk_test_db6ba7663112c3b323f7996c95bbedf9a9f6c1c8',
            amount:amount * 100,
            email,
            firstname,
            lastname,
            onSuccess(transaction){
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert('payment complete')
                setEmail('')
                setamount('')
                setFirstname('')
                setLastname('')
            },
            onCancel(){
                alert('payment cancelled')
            }
            
        })
    }

  return (
   <>
    <div>
        <div>
        <h3 className='bg-cyan-950 text-center p-5 text-xl text-white font-serif '>Make Payment</h3>

        <div  className='grid justify-items-center' >
            <form className='py-10 mt-10 p-20 rounded bg-zinc-300 shadow-lg'>
                <div>
                    <label className='font-normal text-blue-500'>Email Address</label>
                    <div><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='border h-10 w-80 rounded-lg border-0' /></div>
                </div>
                <div>
                    <label className='font-normal text-blue-500'>Amount</label>
                   <div> <input type=""  value={amount} onChange={(e)=>setamount(e.target.value)}   className='border h-10 w-80 rounded-lg border-0 ' placeholder='₦' /></div>
                </div>

                <div>
                    <label className='font-normal text-blue-500'>First Name</label>
                   <div> <input type="name"  value={firstname} onChange={(e)=>setFirstname(e.target.value)} className='border h-10 w-80 rounded-lg border-0'   /></div>
                </div>

                <div>
                    <label className='font-normal text-blue-500'>Last Name</label>  
                    <div> <input type="name"  value={lastname} onChange={(e)=>setLastname(e.target.value)} className='border h-10 w-80 rounded-lg border-0'  /></div>
                    <button type='submit'  className='w-40 h-10 mt-5 rounded-lg bg-cyan-950 text-white font-meduim hover:bg-black' onClick={paywithpaystack} >Pay</button>
                </div>
            </form>
        </div>
        </div>
    </div>
   </>
  )
}

export default Paystack