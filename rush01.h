/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rush01.h                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: zhhovsep <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/11/30 11:44:52 by zhhovsep          #+#    #+#             */
/*   Updated: 2025/11/30 14:14:07 by zhhovsep         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef RUSH01_H
# define RUSH01_H

#include <unistd.h>
#include <stdlib.h>

int parse_input(char *str, int clues[16]);
void print_grid(int **grid);
int solve(int **grid, int row, int col, int clues[16]);
int is_unique(int **grid, int row, int col, int num);
int count_visible(int line[4]);
int check_line(int line[4], int clue_left, int clue_right);

#endif
