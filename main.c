/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: zhhovsep <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/11/30 10:24:55 by zhhovsep          #+#    #+#             */
/*   Updated: 2025/11/30 12:22:45 by zhhovsep         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "rush01.h"
#include <stdlib.h>
#include <unistd.h>
int main(int argc, char **argv)
{
	int **grid;
	int clues[16];
	int i;
        int j;

	if (argc != 2 || !parse_input(argv[1], clues))
	{
		write(1, "Error\n", 6);
		return (1);
	}

	grid = (int **)malloc(4 * sizeof(int *));
	if (!grid) 
		return (1);
	
	i = 0;
	while (i < 4)
	{
		grid[i] = (int *)malloc(4 * sizeof(int));
		if (!grid[i]) 
			return (1);
		j = 0;
		while (j < 4)
		{
			grid[i][j] = 0;
			j++;
		}
		i++;
	}
	if (solve(grid, 0, 0, clues))
		print_grid(grid);
	else
		write(1, "Error\n", 6);

	i = 0;
	while (i < 4)
	{
		free(grid[i]);
		i++;
	}
	free(grid);

	return 0;
}			
