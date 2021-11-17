import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import { createTodo, readTodos, updateTodo, deleteTodo } from './functions';

function App() {
	const [todo, setTodo] = useState({ title: '', content: '' });
	const [todos, setTodos] = useState(null);
	const [currentId, setCurrentId] = useState(0);

  useEffect(()=>{
    let currentTodo = currentId !== 0 ? todos.find(todo => todo._id === currentId) : { title: '', content: '' };
    setTodo(currentTodo);
  }, [currentId])

	useEffect(() => {
		const fetchData = async () => {
			const result = await readTodos();
			setTodos(result);
			// setTodo('');
			// console.log(result);
		};
		fetchData();
	}, [todos]);

  const clear =  () => {
    setTodo({ title: '', content: '' });
    setCurrentId(0);
  }

  useEffect(() => {
    const clearField = (e) => {
      if(e.keyCode === 27) {
        clear();
      }
    }
    window.addEventListener('keydown', clearField);
  }, [])

	const onSubmitHandler = async e => {
		e.preventDefault();
    if(currentId===0){
      const result = await createTodo(todo);
      setTodos([...todos, result]);
      clear();
    }else{
      await updateTodo(currentId, todo);
      clear();
    }
	};

  const removeTodo = async (id) => {
    await deleteTodo(id);
    const todosCopy = [...todos];
    todosCopy.filter(todo => todo._id !== id);
    setTodos(todosCopy);
  }

	return (
		<div className='container'>
			<div className='row'>
        {
          // JSON.stringify(todo)
        }
				<form className='col s12' onSubmit={onSubmitHandler}>
					<div className='row'>
						<div className='input-field col s6'>
							<i className='material-icons prefix'>title</i>
							<input
								id='title'
								type='text'
                value={todo.title}
								className='validate'
								onChange={e => setTodo({ ...todo, title: e.target.value })}
							/>
							<label htmlFor='title'>Title</label>
						</div>
						<div className='input-field col s6'>
							<i className='material-icons prefix'>description</i>
							<input
								id='content'
								type='text'
                value={todo.content}
								className='validate'
								onChange={e => setTodo({ ...todo, content: e.target.value })}
							/>
							<label htmlFor='content'>content</label>
						</div>
					</div>
					<div className='row right-align'>
						<button type='submit' className='waves-effect waves-light btn'>
							Submit
						</button>
					</div>
				</form>
				{!todos ? (
					<Preloader />
				) : todos.length > 0 ? (
					<ul class='collection'>
						{todos.map(todo => (
							<li key={todo._id} className='collection-item' onClick={()=>setCurrentId(todo._id)}>
								<div>
									<h5>{todo.title}</h5>
									<p>
										{todo.content}
										<a href='#!'  className='secondary-content' onClick={() => removeTodo(todo._id)}>
											<i class='material-icons'>delete</i>
										</a>
									</p>
								</div>
							</li>
						))}
					</ul>
				) : (
					<div>Empty</div>
				)}
			</div>
		</div>
	);
}

export default App;
