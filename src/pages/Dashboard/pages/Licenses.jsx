import React from 'react'

const Licenses = () => {
    const navigate = useNavigate()

    return (
        <div>
            <NavBar />
            <PagesLayout buttonText="Add New" onClick={() => navigate("/dashboard/licences/add-license")} />
        </div>
    )
}

export default Licenses