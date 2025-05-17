import React, { useState } from 'react';
import styles from './css/ModalCadastrarEvento.module.css';

const ModalCadastrarEvento = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        nomeEvento: '',
        dataEvento: '',
        horario: '',
        local: '',
        descricao: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/cadastroEventoPresencial', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            alert(data.message);
            onClose();
        } catch (error) {
            console.error('Erro ao cadastrar evento:', error);
            alert('Erro ao cadastrar evento.');
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.modalTitle}>Cadastrar Novo Evento</h2>
                <form onSubmit={handleSubmit} className={styles.modalForm}>
                    <label>Nome do Evento:</label>
                    <input type="text" name="nomeEvento" value={formData.nomeEvento} onChange={handleChange} required />

                    <label>Data:</label>
                    <input type="date" name="dataEvento" value={formData.dataEvento} onChange={handleChange} required />

                    <label>Horário:</label>
                    <input type="time" name="horario" value={formData.horario} onChange={handleChange} required />

                    <label>Local:</label>
                    <input type="text" name="local" value={formData.local} onChange={handleChange} required />

                    <label>Descrição:</label>
                    <textarea name="descricao" value={formData.descricao} onChange={handleChange} rows="4" required></textarea>

                    <div className={styles.eventButtons}>
                        <button type="submit" className={styles.btnEnviar}>Cadastrar</button>
                        <button type="button" className={styles.btnCancelar} onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalCadastrarEvento;
