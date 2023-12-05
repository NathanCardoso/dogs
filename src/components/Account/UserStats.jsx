import { useEffect } from "react"
import Head from "../Helper/Head"
import Loading from "../Helper/Loading"
import Error from "../Helper/Error"
import useFetch from "../../Hooks/useFetch"
import UserStatsGraphs from "./UserStatsGraphs"
import { GET_STATS } from "../../api"

const UserStats = () => {
	const { data, error, loading, request } = useFetch()

	useEffect(() => {
		async function getData() {
			const token = localStorage.getItem("token")
			const { url, options } = GET_STATS(token)
			await request(url, options)
		}
		getData()
	}, [request])

	if (loading) return <Loading />
	if (error) return <Error message={error} />
	if (data)
		return (
			<div>
				<Head title="Estatísticas" />
				<UserStatsGraphs data={data}/>
			</div>
		)
	else return null
}

export default UserStats
