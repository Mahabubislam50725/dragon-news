
import { redirect } from "next/navigation";

const defultCategoryId = "01";

const Home = () => {
  redirect(`/category/${defultCategoryId}`);
}

export default Home;
