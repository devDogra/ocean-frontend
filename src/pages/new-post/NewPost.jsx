import Header from "../../components/Header/Header";
import NewPostForm from "../../components/NewPostForm/NewPostForm";
import "./NewPost.css"; 
import useRedirectIfNotLoggedIn from "../../utils/functions/redirectIfNotLoggedIn";

export default function NewPost() {
    useRedirectIfNotLoggedIn();

    return (
        <>
            <Header />
            <NewPostForm />
        </>
    );
}