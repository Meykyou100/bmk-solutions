import React from 'react';
import { Modal } from './Modal';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'mentions' | 'confidentialite';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const isMentions = type === 'mentions';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isMentions ? 'Mentions Légales' : 'Politique de Confidentialité'}
      subtitle="BMK SOLUTIONS — Sécurité Électronique & Équipements Professionnels"
      maxWidth="3xl"
    >
      <div className="text-sm text-slate-700 space-y-5 leading-relaxed">
        {isMentions ? (
          <>
            <div>
              <h4 className="font-bold text-navy-950 mb-1">1. Présentation de l'entreprise</h4>
              <p>
                Le présent site internet est édité par la société <strong>BMK SOLUTIONS</strong>, spécialiste en solutions de sécurité, électricité et énergie (vidéosurveillance, systèmes anti-intrusion, serrures intelligentes, matériel bureautique et bornes de recharge pour véhicules électriques).
              </p>
              <p className="mt-1 text-slate-600 text-xs">
                <strong>Siège social :</strong> Bine Lamdoune, Rue 45, Numéro 12.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-navy-950 mb-1">2. Contact</h4>
              <p>
                Pour toute question ou demande de devis, l'équipe BMK SOLUTIONS est joignable par téléphone au <strong>+212 662 133 371</strong> et au <strong>+212 662 303 678</strong>, ainsi que par notre formulaire en ligne et sur WhatsApp.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-navy-950 mb-1">3. Propriété intellectuelle</h4>
              <p>
                L'ensemble des contenus (textes, visuels, photographies d'illustration, logo, charte graphique et éléments structurels) présents sur ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans l'accord express de BMK SOLUTIONS est formellement interdite.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-navy-950 mb-1">4. Nature du site & Devis</h4>
              <p>
                Ce site constitue une vitrine institutionnelle de présentation des compétences et des équipements proposés. Il ne constitue pas une boutique de vente en ligne directe. Les demandes de devis et prises de contact effectuées via le site n'engagent contractuellement les parties qu'après établissement et acceptation formelle d'une proposition commerciale détaillée.
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <h4 className="font-bold text-navy-950 mb-1">1. Collecte et finalité des données</h4>
              <p>
                Les informations recueillies via le formulaire de contact (nom, adresse email, numéro de téléphone, type de projet et établissement) font l'objet d'un traitement exclusivement destiné à la gestion de vos demandes de renseignements, études techniques et établissement de devis personnalisés par BMK SOLUTIONS.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-navy-950 mb-1">2. Destinataire des données & Non-cession</h4>
              <p>
                BMK SOLUTIONS est le destinataire unique des données collectées. Vos coordonnées ne sont en aucun cas vendues, cédées ou louées à des tiers à des fins de prospection commerciale.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-navy-950 mb-1">3. Durée de conservation</h4>
              <p>
                Les données relatives aux demandes de devis et prises de contact sont conservées pendant la durée strictement nécessaire au traitement de la relation commerciale et dans le respect des délais légaux de conservation.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-navy-950 mb-1">4. Vos droits (Conformité RGPD)</h4>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression des données personnelles vous concernant. Vous pouvez exercer ce droit à tout moment en adressant une demande écrite via notre formulaire de contact.
              </p>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
