const sessions = require('../Models/Seance');
const lessonsSessions = require('../Models/CoursSeance');

/**
 * Contrôleur pour supprimer une session.
 *
 * @param {Object} req - Requête HTTP.
 * @param {Object} res - Réponse HTTP.
 * @param {Function} next - Fonction pour passer au middleware suivant.
 */
function removeSession(req, res, next) {
    // Récupérer l'ID du professeur à partir de l'utilisateur connecté
    const idProf = req.user.idProf;
    // Récupérer l'ID du cours et de la séance à partir des paramètres de la requête
    const idCours = req.params.idCours;
    const idSeance = req.params.idSeance;

    // Vérifier si le professeur appartient à la séance et au cours spécifiés
    const belongs = lessonsSessions.findOne({
        attributes: ["idCoursSeance"],
        where: {
            idProf: idProf,
            idSeance: idSeance,
            idCours: idCours
        },
        raw: true
    });

    belongs.then(removeSeance);
    belongs.catch(() => {
        res.send("Une erreur est survenue");
    });

    /**
     * Supprimer la séance de la base de données.
     *
     * @param {Object} verdict - Résultat de la vérification de l'appartenance du professeur à la séance.
     */
    function removeSeance(verdict) {
        if (verdict) {
            // Supprimer la séance de la table "sessions" selon l'ID de la séance
            sessions.destroy({
                    where: {
                        idSeance: idSeance
                    }
                })
                .then(() => {
                    res.send("L'opération a réussi");
                })
                .catch(() => {
                    res.send("Une erreur est survenue");
                });
        } else {
            res.send("Cette séance ne vous correspond pas");
        }
    }
}

module.exports = removeSession;
