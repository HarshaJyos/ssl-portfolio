import { Users, BadgeCheck, Handshake } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-[#014865] text-white py-10 w-full rounded-b-[40px] md:rounded-b-[60px] relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">

          {/* Stat 1 */}
          <div className="flex items-center gap-4">
            <Users className="w-10 h-10 text-[#00acb7]" />
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">500+</h3>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wider">Happy Clients</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4">
            <BadgeCheck className="w-10 h-10 text-[#00acb7]" />
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">15+</h3>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wider">Years of Experience</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4">
            <Handshake className="w-10 h-10 text-[#00acb7]" />
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">20+</h3>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wider">Banking Partners</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
