export async function postRequest(formData: any, URL: string) {
  try {
    return await fetch(URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_REDBERRY_TOKEN}`,
      },
      body: formData,
    });
  } catch (error: any) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}

export async function fetchListings(URL_ID = "") {
  try {
    const res = await fetch(
      `https://api.real-estate-manager.redberryinternship.ge/api/real-estates${URL_ID}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_REDBERRY_TOKEN}`,
        },
      }
    );

    if (!res.ok) throw new Error();

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}

export function convertDate(rawDate: Date) {
  const date = new Date(rawDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(2);

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
