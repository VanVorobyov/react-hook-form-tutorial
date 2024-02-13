import { SubmitHandler, useForm } from 'react-hook-form'
import './App.css'

interface IForm {
	name: string;
	age: number;
}

function App() {
	const { register, handleSubmit } = useForm<IForm>({
		defaultValues: {}
	})
	
	const submit: SubmitHandler<IForm> = data => {
		console.log(data)
	}
	
	return (
		<>
			<form onSubmit={handleSubmit(submit)}>
				<input type='text' {...register('name')} />
				<input type='number' {...register('age')} />
				<button>Submit</button>
			</form>
		</>
	)
}

export default App
