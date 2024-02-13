import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import './App.css'

interface IForm {
	name: string;
	age: number;
}

function App() {
	const { register, handleSubmit, clearErrors, formState: { errors } } = useForm<IForm>({
		defaultValues: {}
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
				<input type='number' {...register('age')} />
				<button>Submit</button>
				<button type='button' onClick={() => clearErrors()}>Clear errors</button>
			</form>
		</>
	)
}

export default App
