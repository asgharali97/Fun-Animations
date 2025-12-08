import { IconFilter2, IconShoppingBag } from "@tabler/icons-react";
import {
  ChartNoAxesColumn,
  TextAlignStart,
  ChevronDown,
} from "lucide-react";
import dirbble from "../assets/dribble.svg";
import motion1 from "../assets/motion.svg";
import youtube from "../assets/youtube.svg";
import google from "../assets/google.svg";
import { useState } from "react";
import { motion, cubicBezier, AnimatePresence } from "motion/react";

interface state {
  icon: string | React.ReactElement<React.SVGProps<SVGSVGElement>>;
  name: string;
  revune: string;
  growth: number;
}

const data: state[] = [
  {
    icon: dirbble,
    name: "Dribbble",
    revune: "$1,0000",
    growth: 74,
  },
  {
    icon: motion1,
    name: "Motion",
    revune: "$6,0000",
    growth: 98,
  },
  {
    icon: youtube,
    name: "Youtube",
    revune: "$4,0000",
    growth: 70,
  },
  {
    icon: google,
    name: "Google",
    revune: "$10,0000",
    growth: 50,
  },
];

const DashboardCard = () => {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const displayData = open
    ? [...data].sort(
        (a, b) =>
          parseInt(b.revune.replace(/\D/g, "")) -
          parseInt(a.revune.replace(/\D/g, ""))
      )
    : data;

  const handleToggle = () => {
    setIsAnimating(true);
    setOpen(!open);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <>
      <div className="w-94 h-92 bg-[#f4f4f4] border border-neutral-200 rounded-4xl p-6">
        <div className="flex justify-between items-center">
          <motion.div
            onClick={handleToggle}
            className="flex gap-2 items-center cursor-pointer"
          >
            <div className="relative w-6 h-6">
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="chart"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-neutral-600"
                    >
                      {/* Your chart lines */}
                      <motion.line
                        x1="20"
                        y1="15"
                        x2="20"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{
                          opacity: 0,
                          filter: "blur(10px)",
                          pathLength: 0,
                        }}
                        animate={{
                          opacity: 1,
                          filter: "blur(0px)",
                          pathLength: 1,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.05,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      />
                      <motion.line
                        x1="10"
                        y1="10"
                        x2="10"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{
                          opacity: 0,
                          filter: "blur(10px)",
                          pathLength: 0,
                        }}
                        animate={{
                          opacity: 1,
                          filter: "blur(0px)",
                          pathLength: 1,
                        }}
                        transition={{
                          duration: 0.32,
                          delay: 0.12,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      />
                      <motion.line
                        x1="15"
                        y1="6"
                        x2="15"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{
                          opacity: 0,
                          filter: "blur(10px)",
                          pathLength: 0,
                        }}
                        animate={{
                          opacity: 1,
                          filter: "blur(0px)",
                          pathLength: 1,
                        }}
                        transition={{
                          duration: 0.33,
                          delay: 0.14,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      />
                      <motion.line
                        x1="5"
                        y1="4"
                        x2="5"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{
                          opacity: 0,
                          filter: "blur(10px)",
                          pathLength: 0,
                        }}
                        animate={{
                          opacity: 1,
                          filter: "blur(0px)",
                          pathLength: 1,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.22,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      />
                    </motion.svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-neutral-600"
                    >
                      {/* Your text lines */}
                      <motion.line
                        x1="4"
                        y1="23"
                        x2="14"
                        y2="23"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.05,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      />
                      <motion.line
                        x1="4"
                        y1="18"
                        x2="23"
                        y2="18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.08,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      />
                      <motion.line
                        x1="4"
                        y1="13"
                        x2="18"
                        y2="13"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      />
                      <motion.line
                        x1="4"
                        y1="8"
                        x2="22"
                        y2="8"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.12,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      />
                    </motion.svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: open ? 360 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ChevronDown className="text-neutral-600 h-6 w-6" />
            </motion.div>
          </motion.div>

          <div className="flex items-center gap-2 px-4 py-2 border-neutral-300 border rounded-xl">
            <span className="text-md text-neutral-800 font-medium">
              Filters
            </span>
            <IconFilter2 className="text-neutral-700 h-6 w-6" />
          </div>
        </div>

        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="chart-view"
                className="my-3 w-full h-[calc(100%-110px)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-2 h-full items-end">
                  {displayData.map((item, index) => {
                    const maxHeight = 100;
                    const barHeight = `${(item.growth / 100) * maxHeight}%`;
                    console.log(barHeight);
                    const flyPaths = [
                      { x: [0, 150, 0], y: [0, -100, 0] }, // Right arc
                      { x: [0, -120, 0], y: [0, -150, 0] }, // Left arc
                      { x: [0, 80, 0], y: [0, -120, 0] }, // Slight right
                      { x: [0, -60, 0], y: [0, -90, 0] }, // Slight left
                    ];

                    const flyPath = flyPaths[index % flyPaths.length];

                    return (
                      <motion.div
                        key={item.name}
                        layoutId={`card-${item.name}`}
                        className="flex-1 h-full flex flex-col justify-end items-center"
                        initial={false}
                        animate={{
                          x: flyPath.x,
                          y: flyPath.y,
                        }}
                        transition={{
                          x: {
                            duration: 0.8,
                            times: [0, 0.4, 1],
                            ease: [0.34, 1.56, 0.64, 1],
                          },
                          y: {
                            duration: 0.8,
                            times: [0, 0.4, 1],
                            ease: [0.34, 1.56, 0.64, 1],
                          },
                          layout: {
                            duration: 0.5,
                            ease: [0.32, 0.72, 0, 1],
                          },
                        }}
                      >
                        <motion.div
                          className={`w-full bg-white h-[${barHeight}] rounded-2xl flex items-start justify-center p-1 overflow-hidden`}
                          initial={{ height: "56px", borderRadius: "50%" }}
                          animate={{
                            height: barHeight,
                            borderRadius: "16px",
                          }}
                          transition={{
                            height: {
                              duration: 0.6,
                              delay: 0.8,
                              ease: [0.34, 1.26, 0.64, 1], // Bounce
                            },
                            borderRadius: {
                              duration: 0.3,
                              delay: 0.8,
                            },
                          }}
                        >
                          <div className="relative flex justify-center py-4 h-full w-full rounded-2xl border-neutral-300 bg-[repeating-linear-gradient(315deg,#e1e1e1_0,#e1e1e1_1px,transparent_0,transparent_50%)] bg-[size:9px_9px] bg-fixed">
                            {typeof item.icon === "string" ? (
                              <img
                                src={item.icon}
                                alt=""
                                className="h-7 w-7 z-50"
                              />
                            ) : (
                              item.icon
                            )}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  className="my-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-neutral-600">
                    Deals amount
                  </h4>
                  <div className="flex gap-2 items-center">
                    <h4 className="text-lg font-bold text-neutral-900">
                      by reffer category
                    </h4>
                    <ChevronDown className="h-6 w-6 text-neutral-900" />
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="list-view"
                className="my-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {data.map((item, index) => {
                  return (
                    <motion.div
                      key={item.name}
                      layoutId={`card-${item.name}`}
                      className="flex justify-between items-center mt-2 bg-white rounded-xl py-4 px-4 overflow-hidden"
                      layout
                      transition={{
                        layout: {
                          duration: 0.5,
                          ease: [0.32, 0.72, 0, 1],
                        },
                      }}
                    >
                      <AnimatePresence>
                        {!open && (
                          <>
                            <motion.div
                              className="flex items-center gap-2"
                              initial={{
                                opacity: 0,
                                filter: "blur(10px)",
                                x: -20,
                              }}
                              animate={{
                                opacity: 1,
                                filter: "blur(0px)",
                                x: 0,
                              }}
                              exit={{
                                opacity: 0,
                                filter: "blur(10px)",
                                transition: { duration: 0.3 },
                              }}
                              transition={{ delay: index * 0.05 + 0.3 }}
                            >
                              {typeof item.icon === "string" ? (
                                <img
                                  src={item.icon}
                                  alt=""
                                  className="h-7 w-7"
                                />
                              ) : (
                                item.icon
                              )}
                              <span className="text-md text-neutral-600 font-medium whitespace-nowrap">
                                {item.name}
                              </span>
                            </motion.div>

                            <motion.div
                              className="flex items-center gap-4"
                              initial={{
                                opacity: 0,
                                filter: "blur(10px)",
                                x: 20,
                              }}
                              animate={{
                                opacity: 1,
                                filter: "blur(0px)",
                                x: 0,
                              }}
                              exit={{
                                opacity: 0,
                                filter: "blur(10px)",
                                transition: { duration: 0.3 },
                              }}
                              transition={{ delay: index * 0.05 + 0.3 }}
                            >
                              <span className="text-md text-neutral-900 font-bold whitespace-nowrap">
                                {item.revune}
                              </span>
                              <span className="bg-neutral-200 px-2 text-md text-neutral-800 font-normal rounded-xl whitespace-nowrap">
                                {item.growth}%
                              </span>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>

                      {/* Icon stays visible during shrink */}
                      {open && (
                        <motion.div
                          initial={{ scale: 1 }}
                          animate={{ scale: 1 }}
                          className="mx-auto"
                        >
                          {typeof item.icon === "string" ? (
                            <img src={item.icon} alt="" className="h-7 w-7" />
                          ) : (
                            item.icon
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </>
  );
};

export default DashboardCard;
