import React from "react";

export const OpenPresale = () => {
  const submitOpenPresaleForm = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <div>
      <p>Open Your Presale now!</p>
      <form onSubmit={(event) => submitOpenPresaleForm(event)}>
        <label htmlFor="title">Presale title</label>
        <input type="text" name="title" />
        {/* <label htmlFor="privateStart">Presale start at</label>
        <input type={"datetime-local"} name="privateStart" /> */}
        <input type={"submit"} />
      </form>
    </div>
  );
};

{
  /* <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>  */
}
