import { useEffect, lazy, Suspense } from "react"
import Head from "../Helper/Head"
import Loading from "../Helper/Loading"
import Error from "../Helper/Error"
import useFetch from "../../Hooks/useFetch"
import { GET_STATS } from "../../api"
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"))

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
			<Suspense fallback={<div></div>}>
				<Head title="Estatísticas" />
				<UserStatsGraphs data={data} />
			</Suspense>
		)
	else return null
}

export default UserStats
