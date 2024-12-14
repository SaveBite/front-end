export async function getLoginAnswers() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login_answers`);
  const data = await req.json();
  let arr;
  if (data.status === 200 && data.message === "Success") {
    arr = data.data;
    return arr || [];
  }
  return [];
}
