const DSA = () => {
  const platforms = [
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/imsonukushwaha",
      details: [
        "Certificates: Problem Solving (Basic, Intermediate), SQL (Basic)",
        "Badges: Problem Solving (6 star), C++ (5 star), SQL (5 star) & 3 more",
      ],
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/imsonukushwaha/",
      details: ["500+ problems solved, 5 Badges, 200+ active days"],
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/sonu_11",
      details: [
        "Participated in 20+ Coding Challenges, 3-star coder (1670 Rating)",
      ],
    },
  ];

  return (
    <div className=" md:min-w-2xl flex items-center justify-center">
      <div className="flex flex-col text-base font-light">
        {platforms.map((platform, index) => (
          <div key={index} className="mb-4">
            <strong className="text-orange-300 text-xl">
              <a href={platform.url} target="_blank" className="gap-0">
                {platform.name}
                <span className="text-xs align-top">🔗</span>
              </a>
            </strong>
            <ul className="list-disc font-medium pl-6">
              {platform.details.map((detail, idx) => (
                <li key={idx} className="text-orange-100">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DSA;
