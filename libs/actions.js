
 
export const getAllUsers = async () => {
    const passenger = await fetch("http://localhost:3000/api/passenger");
    return passenger.json();
}