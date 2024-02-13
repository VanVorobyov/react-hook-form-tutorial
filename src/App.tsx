import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import './App.css'

interface IForm {
	name: string;
	age: number;
}

function App() {
	const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm<IForm>({
		defaultValues: {
			age: 18
		}
	})
	
	const submit: SubmitHandler<IForm> = data => {
		console.log(data)
	}
	
	const error: SubmitErrorHandler<IForm> = data => {
		console.log(data)
	}
	
	return (
		<>
			<form onSubmit={handleSubmit(submit, error)}>
				<input type='text' {...register('name', { required: true })} aria-invalid={!!errors.name} />
				<Controller render={({ field }) => <input {...field} />} name={'age'} control={control} />
				<button>Submit
				</button>
				<button type='button' onClick={() => setValue('name', 'Bob')}>Set name</button>
			</form>
			{watch('name')}
		</>
	)
}

export default App
