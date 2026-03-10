export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] border-t border-[#333] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Colonne 1 : Branding */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-black uppercase text-white mb-6">MvndiCraft</h3>
          <p className="text-[#666] text-sm max-w-sm mb-8">
            Gaming for Charity. Chaque année, nous unissons la communauté pour bâtir un monde meilleur tout en créant des légendes inoubliables.
          </p>
          <div className="flex gap-4">
            {/* Ici tu pourrais ajouter des icônes de réseaux sociaux */}
            <div className="w-10 h-10 bg-[#1a1a1f] flex items-center justify-center hover:bg-[#E2B714] hover:text-black transition-colors cursor-pointer">
              <span className="text-xs font-bold">X</span>
            </div>
            <div className="w-10 h-10 bg-[#1a1a1f] flex items-center justify-center hover:bg-[#E2B714] hover:text-black transition-colors cursor-pointer">
              <span className="text-xs font-bold">DC</span>
            </div>
          </div>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div>
          <h4 className="text-xs font-bold uppercase text-[#E2B714] tracking-widest mb-6">Plateforme</h4>
          <ul className="space-y-4 text-sm text-[#888]">
            <li><a href="#" className="hover:text-white transition-colors">Serveurs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Wiki</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Boutique</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Légal */}
        <div>
          <h4 className="text-xs font-bold uppercase text-[#E2B714] tracking-widest mb-6">Légal</h4>
          <ul className="space-y-4 text-sm text-[#888]">
            <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-[#1a1a1f] text-center text-[#444] text-xs">
        © 2026 MvndiCraft. Tous droits réservés. Créé par la communauté.
      </div>
    </footer>
  );
}