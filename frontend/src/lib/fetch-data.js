export const fetchFixtures = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b22592c52fmshf5acbfd234260f3p16dbc9jsn8ceb03489f9e",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const result = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};

export const fetchStandings = async (leagueID) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b22592c52fmshf5acbfd234260f3p16dbc9jsn8ceb03489f9e",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const result = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=${leagueID}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};

export const fetchTesting = async (leagueID) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b22592c52fmshf5acbfd234260f3p16dbc9jsn8ceb03489f9e",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const result = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/leagues`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};

export const fetchTeam = async (teamID) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b22592c52fmshf5acbfd234260f3p16dbc9jsn8ceb03489f9e",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const result = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?id=${teamID}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};
