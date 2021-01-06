const API_BASE_URL ='https://api.tvmaze.com/'

export async function get_api(query_string)
{
    const response=await fetch(`${API_BASE_URL}${query_string}`).then(r=>r.json());
    return response;
}