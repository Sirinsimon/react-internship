import React from 'react'
import Swal from 'sweetalert2'

function Msg() {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
    return (
        <div>Msg</div>
    )
}

export default Msg