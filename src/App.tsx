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
	
	const isName = _ => {
		console.log('Вызвана')
		return false
	}
	
	return (
		<>
			<form onSubmit={handleSubmit(submit)}>
				<input type='text' {...register('name', { required: true, validate: isName })} />
				<input type='number' {...register('age')} />
				<button>Submit</button>
			</form>
		</>
	)
}

export default App
