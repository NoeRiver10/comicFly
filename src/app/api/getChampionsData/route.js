import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.football-data.org/v2/competitions/CL/standings', {
      headers: { 'X-Auth-Token': '87227420af1d433a88294eca9f901db6' }
    });
    return new Response(JSON.stringify(response.data.standings[0].table), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching the Champions League data:', error);
    return new Response(JSON.stringify({ error: 'Error fetching the Champions League data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
