import React from 'react';
import ScrollViewItem from './ScrollView_Item';

import {
    ScrollView_one,
} from './styles';

export default function ScrollViewOptions() {
    return (
        <ScrollView_one contentContainerStyle={{
            paddingVertical: 20
        }}>
            <ScrollViewItem>Alterar dados cadastrais</ScrollViewItem>
            <ScrollViewItem>Alterar dados pessoais </ScrollViewItem>
            <ScrollViewItem>Alterar localização</ScrollViewItem>
            <ScrollViewItem>Minhas compras</ScrollViewItem>
            <ScrollViewItem>Minhas vendas</ScrollViewItem>
            <ScrollViewItem>Meus produtos</ScrollViewItem>
            <ScrollViewItem>Meu carrinho</ScrollViewItem>
        </ScrollView_one>
    )
};

