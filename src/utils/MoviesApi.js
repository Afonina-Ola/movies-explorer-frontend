export const getAllMovies = () => {
    return fetch('https://api.homamovie.nomoredomains.monster')
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).catch((err) => {
            console.log(err)
        })
}