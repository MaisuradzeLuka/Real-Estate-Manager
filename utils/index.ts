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
