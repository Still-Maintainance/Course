function Profile() {
  return (
    <div className="flex justify-center items-center pt-20">
      <div className="flex items-center gap-6 bg-white px-10 py-8 rounded-2xl shadow-xl border border-gray-200 max-w-xl w-full">
        {/* Avatar Circle */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center w-24 h-24 bg-gray-800 rounded-full text-white text-4xl font-bold shadow-sm"
        >
          AS
        </div>

        {/* Name + Role */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-gray-900 leading-snug">
            Welcome, A. Sri Vidya Sagar
          </h1>
          <p className="text-md text-gray-500 font-medium">Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
