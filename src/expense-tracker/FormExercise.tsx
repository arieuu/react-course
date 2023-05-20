import { useForm } from "react-hook-form";
import { number, string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";

const schema = z.object({
    description: z.string().min(4, {message: "Description needs to be longer than 4 chars"}),
    amount: z.number({invalid_type_error: "Amount field is required"}).min(0.01).max(100_00),
    category: z.enum(categories, {
        errorMap: () => ({message: "Category is required"})
    }) //An enum can be one of many values
    
});

// interface describing form
type FormData = z.infer<typeof schema>;

interface Props {
    onSubmit(data:FormData) : void
}

function FormExercise({onSubmit} :Props) {

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>({resolver: zodResolver(schema)})

    return (
        <>
            <form onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset(); // Clear the inputs after submition
            })}>

                <label htmlFor="description"> Description </label> <br />
                <input id="description" {...register("description")}  type="text" />     
                { errors.description && <> <br /> <span> { errors.description.message } </span> </>}

                <br /><br />
                <label htmlFor="amount"> Amount </label> <br />
                <input id="amount" {...register("amount", {valueAsNumber: true /** set value to number*/})} type="number" />     
                { errors.amount && <> <br /> <span> { errors.amount.message } </span> </>}

                <br /><br />
                <label htmlFor="amount"> Category </label> <br />
                <select id="" {...register("category")} >
                    <option value=""> </option>
                    {categories.map(cat => <option key={cat} value={cat}> {cat} </option>)}
                </select>

                <br /> <br />
                <button type="submit"> Submit </button>
            </form> 

        
        </>
    )

}

export default FormExercise;