import React from "react";

export default function Login() {
  return (
    <div>
      <h2>LOGIN</h2>
      <div class="container">
        <div class="title">CONTATTAMI</div>
        <form action="Connect.php" method="post">
            <div class="user-details">
                
                <div class="input-box">
                 <label for="Email" class="details">Email</label>
                 <input type="text"placeholder="marcorossi@email.com" required name="Email"/>
                </div>
                <div class="input-box">
                 <label for="Password" class="details">Password</label>
                 <input type="password"placeholder="password" required name="Password"/>
                </div>
                <div class="button">
                    <input type="button" value="Invia"/>
                </div>
            </div>
        </form>
    </div>
    </div>
  );
}
