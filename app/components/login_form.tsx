export const LogInForm = () => {
  return (
    <>
      <div className="text-center mb-8 mt-4">
        <p className="mb-1 text-2xl font-semibold">Sign In</p>
        <p className="italic">Sign in to your account to continue with analysis</p>
      </div>
      <form className="flex flex-col">
        <div className="input-div">
            <input type="text" className="user-input" placeholder="Username" />
        </div>
        <div className="input-div">
            <input type="password" className="user-input" placeholder="Password" />
        </div>
        <button className="custom-btn w-5/6 mx-auto mt-8">Log in</button>
      </form>
    </>
  );
};
