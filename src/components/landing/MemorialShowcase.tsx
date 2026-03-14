import { motion } from "framer-motion";
import portraitImg from "@/assets/memorial-portrait.jpg";
import cookingImg from "@/assets/memorial-cooking.jpg";
import familyImg from "@/assets/memorial-family.jpg";
import dinnerImg from "@/assets/memorial-dinner.jpg";
import fishingImg from "@/assets/memorial-fishing.jpg";
import workshopImg from "@/assets/memorial-workshop.jpg";
import danceImg from "@/assets/memorial-dance.jpg";

const memories = [
  {
    src: cookingImg,
    alt: "Thomas cooking his famous stew",
    caption: "Sunday stew — he never once used a recipe",
    span: "md:col-span-2",
  },
  {
    src: danceImg,
    alt: "Thomas and Margaret dancing at their anniversary",
    caption: "50th anniversary — still his favorite dance partner",
    span: "",
  },
  {
    src: fishingImg,
    alt: "Thomas fishing at dawn on the lake",
    caption: "Lake Champlain, 5:30 AM — 'the only hour worth waking for'",
    span: "",
  },
  {
    src: workshopImg,
    alt: "Thomas in his workshop building furniture",
    caption: "The workshop — every grandchild has a bookshelf he built",
    span: "",
  },
  {
    src: familyImg,
    alt: "Walking with granddaughter on the beach",
    caption: "With Emma at Onset Beach, summer 2018",
    span: "",
  },
  {
    src: dinnerImg,
    alt: "Christmas dinner with the whole family",
    caption: "Christmas 2022 — the last one with everyone together",
    span: "md:col-span-3",
  },
];

const MemorialShowcase = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            A Real Memento
          </p>
          <h2 className="text-4xl md:text-5xl font-display italic text-foreground mb-2">
            This is what it looks like
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            When someone you love leaves behind a Memento, this is what their family receives.
          </p>
        </motion.div>

        {/* Memorial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 rounded-2xl border border-border/50 bg-background overflow-hidden shadow-xl"
        >
          {/* Portrait header */}
          <div className="flex flex-col items-center pt-16 pb-10 px-6 border-b border-border/30">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-border/20 shadow-lg mb-8">
              <img
                src={portraitImg}
                alt="Thomas H. Peason"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-display italic text-foreground mb-3">
              Thomas H. Peason
            </h3>
            <p className="font-body text-sm text-muted-foreground tracking-wide mb-6">
              April 3, 1941 — February 12, 2024
            </p>
            <blockquote className="font-display italic text-foreground/80 text-lg md:text-xl max-w-lg text-center leading-relaxed">
              "He always said the best part of any meal was the people around the table. He meant it."
            </blockquote>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30">
            {memories.map((memory, i) => (
              <motion.div
                key={memory.alt}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className={`relative group overflow-hidden ${memory.span}`}
              >
                <img
                  src={memory.src}
                  alt={memory.alt}
                  className="w-full h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end">
                  <p className="font-body text-sm text-background/0 group-hover:text-background/90 transition-all duration-500 p-5">
                    {memory.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Memorial footer */}
          <div className="px-8 py-10 md:px-16 md:py-14 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Memory Timeline
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-border/40 pl-6">
              <div>
                <p className="font-body text-xs text-muted-foreground">1941</p>
                <p className="font-body text-sm text-foreground/80">
                  Born in Brattleboro, Vermont — the youngest of four
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">1963</p>
                <p className="font-body text-sm text-foreground/80">
                  Graduated from UMass Amherst — "best years of my life, until I met your mother"
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">1966</p>
                <p className="font-body text-sm text-foreground/80">
                  Married Margaret at St. Anne's — they danced to "Unforgettable"
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">1971</p>
                <p className="font-body text-sm text-foreground/80">
                  Opened Peason Hardware on Main Street — ran it for 34 years
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">1989</p>
                <p className="font-body text-sm text-foreground/80">
                  Built the lake house by hand — "a man needs a project and a porch"
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">2014</p>
                <p className="font-body text-sm text-foreground/80">
                  First grandchild, Emma — "finally someone who laughs at my jokes"
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground">2022</p>
                <p className="font-body text-sm text-foreground/80">
                  Last Christmas with the whole family — he made his famous beef stew
                </p>
              </div>
            </div>

            {/* Voice message hint */}
            <div className="mt-8 p-5 rounded-xl bg-card border border-border/30">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                A message he left
              </p>
              <p className="font-display italic text-foreground/70 text-base leading-relaxed">
                "I'm not great with words, but I want you all to know — the life I had was the life I wanted. 
                Every Sunday dinner, every fishing trip, every time one of you walked through that front door. That was it. That was everything."
              </p>
              <p className="font-body text-xs text-muted-foreground mt-3">
                Recorded December 4, 2023
              </p>
            </div>

            <p className="font-body text-xs text-muted-foreground pt-4">
              8 voice messages · 1,247 photos · 4 video letters · 1 life well lived
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MemorialShowcase;
