import CreateUserForm from "../views/users/create-user-form";

export default function Home() {
  return <div className="flex justify-center mt-8">
    <div style={{width: 400}}>
      <CreateUserForm />
    </div>
  </div>
}
