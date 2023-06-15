import { useUserContext } from "../../providers/UserContext"

export const DashboardPage = () => {
    const { user, userLogout } = useUserContext();

    return(
        <main>
            <button onClick={() => userLogout()}>Sair</button>
            <h1>{user?.name}</h1>
            <p>{user?.email}</p>
        </main>
    )
}