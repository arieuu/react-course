import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; // We use this to integrate our zod schema with react-hook-form

// Doing schema based validation with zod

const schema = z.object({
    name: z.string().min(3, {message: "Longer bro, pleasee"}), // custom error message
});

// Using an interface to define the shape of our form, that way we get intellisense from react-hook-form

type FormData = z.infer<typeof schema>; // Zod will create an interface for the form based on the previously created schema

/*
interface FormData {
    name: string;
}
*/

function Form() {

    // Nested destructuring for formstate errors
    const { register, handleSubmit, formState: {errors, isValid},} = useForm<FormData>({resolver: zodResolver(schema)})

    return(
        <>
            <form onSubmit={handleSubmit(data => console.log(data))}>

                <input {...register("name")} type="text" /> <br />

                <button disabled={!isValid /** This button will be disabled if the form isnt valid yet */} type="submit"> Submit </button>
            </form>


            {/** Using optional chaining to access a propriety that might or might not be empty */}

            { /* errors.name?.type === "required" && <p> Please input a value you dumbasss </p> */}

            { errors.name && <p> {errors.name.message} </p>}
        </>
    )

}

export default Form;