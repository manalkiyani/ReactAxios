import React from 'react';
import axios from'axios';
import './itemList.css';
import Del from './delete';


const ItemsList = () => {


const [articles,setArticles] = React.useState([]);
const [fetchError,setFetchError] = React.useState(null);
const [delError,setDelError] = React.useState(null);

    React.useEffect(()=>{
        axios.get('https://60968942116f3f00174b33b7.mockapi.io/api/v1/articles')
          .then(res => {
            if (res.status != 200 ){
              setDelError('Articles cou not be fetched');

            }
            console.log(res);
            const art = res.data;
            setArticles(art)
          });
        
          
         } ,[])
      
const delHandler = (id) =>{
          console.log(id)
          axios.delete(`https://60968942116f3f00174b33b7.mockapi.io/api/v1/articles/${id}`)
            .then(res => {
              console.log(res);
              if (res.status != 200 ){
                setDelError(' Article could not be deleted');

              }
              axios.get('https://60968942116f3f00174b33b7.mockapi.io/api/v1/articles')
            .then(res => {
              console.log(res);
              const art = res.data;
              setArticles(art)
            });
          
           
              
            })

           
      }
      

  return (
    <>
      {fetchError}
      {delError}
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Date</th>
        <th>Delete</th>
      </tr>

      </thead>
    <tbody>
{articles.map((val) => {
        return (
          <tr key={val.id}>
            <td>{val.id}</td>
            <td><img src={val.avatar}></img></td>
            <td>{val.name}</td>
            <td>{val.createdAt}</td>
            <td>{<Del 
            index={val.id}
            onClick={delHandler}/>}
            </td>
          </tr>
        )
      })}
    </tbody>
     
    </table>  
    </>
  )
}

export default ItemsList;