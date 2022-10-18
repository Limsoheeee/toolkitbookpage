import React,{useState, useEffect} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { __editPost,__getPostId} from "../slice/bookSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button, { THEM_DEL } from "../components/element/Button";

function Edit() {
  const data = useSelector((state)=>state.bookSlice.post)
  
    const dispatch = useDispatch();
    const {id} = useParams();
    const [edit,setEdit] = useState(data || {});
    const navigate = useNavigate();

    useEffect(()=>{
      dispatch(__getPostId(id))
    },[dispatch, id])

    const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setEdit({...edit, [name]: value });       
    };

    const onSubmitHandler = (e) => {
      e.preventDefault(); 

      dispatch(__editPost(edit))
      navigate(`/detail/${id}`)
    };

  return (
    <form onSubmit={onSubmitHandler}>
      <Header />
      
       <Container>
       <Content> 작성자:<input type="text" value={edit.writer} name={"writer"} onChange={onChangeHandler}/></Content>
       <Content> 제목:<input type="text" value={edit?.title} name={"title"} onChange={onChangeHandler}/></Content>
       <Content>감상평:<textarea type="text" value={edit?.review} name={'review'} onChange={(e) => onChangeHandler(e)}/></Content>
       <Wraper>
       <Button
          type={"submit"}
       >완료</Button>
       <Button
          type={"button"}
          theme={THEM_DEL}
          on_click={()=>navigate(`/detail/${id}`)}
       >취소</Button>
       </Wraper>

     </Container>
      
    </form> 
  );
}

export default Edit;

const Container = styled.div`
 display: flex;
  width: 500px;
  height: 200px;
  margin-top: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  flex-direction: column;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin: 100px auto 0 auto;
  `;
const Wraper = styled.div`
display: flex;
/* justify-content: space-between; */
gap: 10px;
margin-bottom: 20px;
`;

const Content = styled.li`
text-align: center;
margin-top: 20px;
list-style: none;
padding-left: 0px;
`;