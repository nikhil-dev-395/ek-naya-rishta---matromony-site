import { Link } from "react-router-dom";

const Community = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-[#FFF7FC] py-28 flex flex-col gap-10 animate-fade">

<h1 className="text-3xl text-center font-semibold">welcome to Rishta community</h1>

        <div
          id="CommunityBox"
          className="bg-white w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg sm:p-4"
        >
          <h2 className="text-lg font-bold flex items-center justify-between mb-4 sm:flex-col sm:items-start sm:mb-2">
            <Link
              to="#user@123"
              className="hover:text-indigo-600 hover:underline sm:mb-2"
            >
              user@123
            </Link>
            <span className="text-sm text-gray-500">22 Jan 10:20 am</span>
          </h2>
          <p className="py-4 px-6 bg-gray-50 rounded-lg shadow-sm sm:py-2 sm:px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            pariatur fuga cupiditate voluptatem reprehenderit? Optio repellat
            distinctio magnam a praesentium, amet fugit quidem blanditiis!
            Tempore sequi ipsa labore sunt veniam, odit debitis, aut itaque modi
            illum voluptatibus numquam expedita non unde, voluptas natus
            consequuntur! Voluptates pariatur nesciunt quas aliquid ut
            necessitatibus nobis soluta modi quia aut eos excepturi distinctio
            provident laboriosam commodi tenetur consequatur, a rerum, totam
            quibusdam blanditiis perferendis voluptatem error officia. Officia
            exercitationem non quia dolor temporibus et accusantium! Harum nihil
            nesciunt eaque eum quaerat quia rem aperiam deleniti distinctio odit
            labore, est asperiores provident illum eos saepe error dolore quam
            explicabo. Impedit, magni inventore laudantium minima
            necessitatibus, animi voluptatibus dicta ex ad tempora facere.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                Like
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                Comment
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
                Share
              </button>
            </div>

            {/* it shows how may comments are there */}
            <div className="text-sm text-gray-500">
              1 comment</div>
          </div>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Comments</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span><Link to="#userWhoCommented" className="text-sm underline text-blue-600">@userWhoCommented</Link></span>
{/* his / her comments */}
              <p>Comment no. 1</p>
            </div>
          </div>
        </div>

        <div
          id="CommunityBox"
          className="bg-white w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg sm:p-4"
        >
          <h2 className="text-lg font-bold flex items-center justify-between mb-4 sm:flex-col sm:items-start sm:mb-2">
            <Link
              to="#user@123"
              className="hover:text-indigo-600 hover:underline sm:mb-2"
            >
              user@123
            </Link>
            <span className="text-sm text-gray-500">22 Jan 10:20 am</span>
          </h2>
          <p className="py-4 px-6 bg-gray-50 rounded-lg shadow-sm sm:py-2 sm:px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            pariatur fuga cupiditate voluptatem reprehenderit? Optio repellat
            distinctio magnam a praesentium, amet fugit quidem blanditiis!
            Tempore sequi ipsa labore sunt veniam, odit debitis, aut itaque modi
            illum voluptatibus numquam expedita non unde, voluptas natus
            consequuntur! Voluptates pariatur nesciunt quas aliquid ut
            necessitatibus nobis soluta modi quia aut eos excepturi distinctio
            provident laboriosam commodi tenetur consequatur, a rerum, totam
            quibusdam blanditiis perferendis voluptatem error officia. Officia
            exercitationem non quia dolor temporibus et accusantium! Harum nihil
            nesciunt eaque eum quaerat quia rem aperiam deleniti distinctio odit
            labore, est asperiores provident illum eos saepe error dolore quam
            explicabo. Impedit, magni inventore laudantium minima
            necessitatibus, animi voluptatibus dicta ex ad tempora facere.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                Like
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                Comment
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
                Share
              </button>
            </div>

            {/* it shows how may comments are there */}
            <div className="text-sm text-gray-500">
              1 comment</div>
          </div>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Comments</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span><Link to="#userWhoCommented" className="text-sm underline text-blue-600">@userWhoCommented</Link></span>
              {/* his / her comments */}
              <p>Comment no. 1</p>
            </div>
          </div>
        </div>

        <div
          id="CommunityBox"
          className="bg-white w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg sm:p-4"
        >
          <h2 className="text-lg font-bold flex items-center justify-between mb-4 sm:flex-col sm:items-start sm:mb-2">
            <Link
              to="#user@123"
              className="hover:text-indigo-600 hover:underline sm:mb-2"
            >
              user@123
            </Link>
            <span className="text-sm text-gray-500">22 Jan 10:20 am</span>
          </h2>
          <p className="py-4 px-6 bg-gray-50 rounded-lg shadow-sm sm:py-2 sm:px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            pariatur fuga cupiditate voluptatem reprehenderit? Optio repellat
            distinctio magnam a praesentium, amet fugit quidem blanditiis!
            Tempore sequi ipsa labore sunt veniam, odit debitis, aut itaque modi
            illum voluptatibus numquam expedita non unde, voluptas natus
            consequuntur! Voluptates pariatur nesciunt quas aliquid ut
            necessitatibus nobis soluta modi quia aut eos excepturi distinctio
            provident laboriosam commodi tenetur consequatur, a rerum, totam
            quibusdam blanditiis perferendis voluptatem error officia. Officia
            exercitationem non quia dolor temporibus et accusantium! Harum nihil
            nesciunt eaque eum quaerat quia rem aperiam deleniti distinctio odit
            labore, est asperiores provident illum eos saepe error dolore quam
            explicabo. Impedit, magni inventore laudantium minima
            necessitatibus, animi voluptatibus dicta ex ad tempora facere.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                Like
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                Comment
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
                Share
              </button>
            </div>

            {/* it shows how may comments are there */}
            <div className="text-sm text-gray-500">
              1 comment</div>
          </div>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-gray-700">Comments</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span><Link to="#userWhoCommented" className="text-sm underline text-blue-600">@userWhoCommented</Link></span>
              {/* his / her comments */}
              <p>Comment no. 1</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;