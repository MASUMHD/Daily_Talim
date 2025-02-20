/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */

const Popup = () => {
  return (
    <div className="container mx-auto border-2 border-[#020202] w-1/2 rounded-lg shadow-xl">
      <div className="mx-8 my-8">
        <h1 className="text-2xl font-bold text-black text-center my-auto mt-8">
          আজকের তালিম (Daily Ta'lim)
        </h1>

        <div className="mt-10">
          <h1 className="text-xl font-bold text-black">📖 কুরআনের আয়াত </h1>
          <p className="text-base mt-3 ml-6">
            اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ اللّه ছাড়া কোনো
            উপাস্য নেই, তিনি চিরঞ্জীব, সর্বদা সজাগ। — (সূরা আল-বাকারা: ২৫৫ -
            আয়াতুল কুরসি)
          </p>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-bold text-black">📜 হাদিস </h1>
          <p className="text-base mt-3 ml-6">
            النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: خَيْرُكُمْ مَنْ
            تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ “তোমাদের মধ্যে সর্বশ্রেষ্ঠ সে, যে
            কুরআন শেখে এবং অন্যকে শেখায়।” — (সহিহ বুখারি: ৫০২৭)
          </p>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-bold text-black">🤲 আজকের দোয়া </h1>
          <p className="text-base mt-3 ml-6">
            اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعَافِيَةَ فِي الدُّنْيَا
            وَالْآخِرَةِ “আল্লাহুম্মা ইন্নি আসআলুকাল ‘আফওয়া ওয়াল ‘আফিয়াতা
            ফিদ্দুনিয়া ওয়াল আখিরাহ” <br /> অর্থ: “হে আল্লাহ! আমি আপনার কাছে ক্ষমা ও
            শান্তি কামনা করছি, দুনিয়া ও আখিরাতে।”
          </p>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-bold text-black">🕌 ইসলামিক শিক্ষা</h1>
          <ul className="text-base mt-3 ml-12 list-disc ">
            <li className="">সকালে ঘুম থেকে উঠে আলহামদুলিল্লাহ বলা সুন্নত।</li>
            <li>দোয়া ও জিকির মানুষের অন্তরকে প্রশান্ত করে।</li>
            <li>বিসমিল্লাহ বলে কাজ শুরু করলে তাতে বরকত হয়।</li>
          </ul>
        </div>

        <div className="mt-10">
            <p className="text-base mt-3 ">
            💙 নিয়মিত আমল করলে ইহকাল ও পরকালে কল্যাণ লাভ হবে ইনশাআল্লাহ!
            আপনি আরও কোনো নির্দিষ্ট বিষয় জানতে চান? 😊
            </p>
        </div>

      </div>
    </div>
  );
};

export default Popup;
