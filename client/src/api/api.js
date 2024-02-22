import { apiBaseUrl } from "@/constants/constants"


export const getAllBooks = async () => {
    const url = `${apiBaseUrl}/getAllBooks`;

    try {
        const response = await fetch(url,{cache:"no-store"});

        if (response.ok) {
            const data = await response.json();
            console.log("response = ", data);
            return data;
        } else {
            console.error("Error fetching books. Status:", response.status);
            return null;
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error; 
    }
}

export const getAllAnimals = async ()=>{

    const url = `${apiBaseUrl}/getAllAnimals`;

    try {
        const response = await fetch(url,{cache:"no-store"});

        if (response.ok) {
            const data = await response.json();
            
            return data;
        } else {
            console.error("Error fetching animals. Status:", response.status);
            return null;
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error; 
    }

}

export const updateAnimal = async (formData)=>{

    const url = `${apiBaseUrl}/updateAnimal`

    const updateResult = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(formData),
      })
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();
    
            return data;
          } else {
            console.error(
              "Failed to add book . Status code:",
              JSON.stringify(response)
            );
    
            return null;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    
      return updateResult;

}

export const updateBook = async (formData)=>{

  const url = `${apiBaseUrl}/updateBook`

  const updateResult = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
  
          return data;
        } else {
          console.error(
            "Failed to add book . Status code:",
            JSON.stringify(response)
          );
  
          return null;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
    return updateResult;

}


export const addBook = async (bookData)=>{


  const url = `${apiBaseUrl}/addBook`

  const addResult = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify(bookData),
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
  
          return data;
        } else {
          console.error(
            "Failed to add book . Status code:",
            JSON.stringify(response)
          );
  
          return null;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
    return addResult;


}

export const addAnimal = async (animalData)=>{


  const url = `${apiBaseUrl}/addAnimal`

  const addResult = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify(animalData),
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
  
          return data;
        } else {
          console.error(
            "Failed to add animal . Status code:",
            JSON.stringify(response)
          );
  
          return null;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
    return addResult;


}

export const getApiCalls = async () => {
  const url = `${apiBaseUrl}/getCount`;

  try {
      const response = await fetch(url,{cache:"no-store"});

      if (response.ok) {
          const data = await response.json();
          console.log("response = ", data);
          return data;
      } else {
          console.error("Error fetching books. Status:", response.status);
          return null;
      }
  } catch (error) {
      console.error("Error fetching books:", error);
      throw error; 
  }
}