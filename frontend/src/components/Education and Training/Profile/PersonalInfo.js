import React from 'react'

const PersonalInfo = ({ userData, setUserData }) => {
  const { firstName, lastName, email, phone, gender, dob, zipCode, streetAddress, city, state, } = userData;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  }
  const handleOnChange = (event) => {
    // console.log(event.target.id, event.target.value);
    setUserData({
      ...userData,
      [event.target.id]: event.target.value
    })

  }
  return (
    <div>
      <h4 className="text-2xl text-gray-800 font-semibold mb-4">Personal</h4>

      <form className='grid sm:grid-cols-1 md:grid-cols-2 gap-4' onSubmit={handleSubmit}>

        <input value={firstName} onChange={handleOnChange}
          type="text"
          name="firstName"
          id="firstName"
          placeholder='First Name'
          className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'
        />

        <input value={lastName} onChange={handleOnChange}
          type="text"
          name="lastName"
          id="lastName"
          placeholder='Last Name'
          className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'
        />

        <input value={email} onChange={handleOnChange}
          type="email"
          name="email"
          id="email"
          placeholder='Email address'
          className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'
        />

        <input value={phone} onChange={handleOnChange}
          type="phone"
          name="phone"
          id="phone"
          placeholder='Phone Number'
          className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'
        />

        <input value={dob} onChange={handleOnChange}
          type="date"
          name="dob"
          id="dob"
          placeholder='Date of Birth'
          className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'
        />

        <select defaultValue={gender} onChange={handleOnChange} name="gender" id="gender" className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'>
          <option value="gender">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input value={streetAddress} onChange={handleOnChange}
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder='Street Address'
          className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'
        />

        <input value={zipCode} onChange={handleOnChange}
          type="number"
          name="zipCode"
          id="zipCode"
          placeholder='Zip Code'
          className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'
        />

        <input value={city} onChange={handleOnChange}
          type="text"
          name="city"
          id="city"
          placeholder='City'
          className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'
        />

        <input value={state} onChange={handleOnChange}
          type="text"
          name="state"
          id="state"
          placeholder='State'
          className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0'
        />

        <button type="submit" className='bg-slate-800 md:w-[35%] p-2 rounded-md text-white font-medium'>Save Changes</button>
      </form>

      <ChangePassWord />

    </div>
  )
}

export const ChangePassWord = () => {

  const list = ['Old Password', 'New PassWord', 'Confirm Password']

  return (
    <div className='my-10'>
      <h4 className="text-2xl text-gray-800 font-semibold mb-4">Change Password</h4>
      {list.map(item =>
        <div key={item} className='flex'>
          <input
            type="password"
            name={item}
            id={item}
            placeholder={item}
            className=' bg-gray-100 w-full rounded-lg text-sm p-4 text-slate-800 outline-0 my-2'
          />
        </div>
      )}
      <button className='bg-slate-800 sm:w-full md:w-[17.5%] p-2 mt-2 rounded-md text-white font-medium' onClick={()=>alert('Password Changed...')}>Save Changes</button>

    </div>
  )
}

export default PersonalInfo
