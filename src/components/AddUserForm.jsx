import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)

        props.addUser(data)
        // limpiar campos
        e.target.reset();
    }

    return ( 
        <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
            placeholder="Ingrese nombre de usuario"
            type="text" 
            name="name"
            ref={register({
                required: {
                    value: true, 
                    message: 'Nombre es requerido'
                    }
            })}
            />
            <div>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.name?.message}
                </span>
            </div>
            
            <label>Username</label>
            <input type="text" name="username"  
            ref={register({
                required: {
                    value: true, 
                    message: 'username es requerido'
                    }
            })}
            />
            <div>
            {
                errors.username && <span className="text-danger text-small d-block mb-2">{errors.username.message}</span>
            }
            </div>
            <button type="submit">Add new user</button>
        </form>
        </Fragment>
     );
}
 
export default AddUserForm;